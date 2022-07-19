import React, { useContext, useEffect, useRef, useState } from 'react';
import SearchUser from './searchuser/SearchUser';
import ChatUser from './chatuser/ChatUser';
import Chat from './chat/Chat';
import styles from './Support.module.css';
import { Link } from 'react-router-dom';
import { getChatList } from '../../redux/chat/actions/chatList.action';
import { AnyIfEmpty, useDispatch, useSelector } from 'react-redux';
import { Client, Conversation, Message, Participant } from '@twilio/conversations';

import { AppContext } from '../context/AppContect';
import { getParticipants, getToken, updateCurrentConversation, updateMessages } from '../../redux/twilio/actions/twilio.actions';

const Support = () => {
    const dispatch = useDispatch();
    const [chatTab, setChatTab] = useState('Active Visit');
    const [client, setClient] = useState<Client>();
    const [convos, setConvos] = useState<Conversation[]>([]);
    const token = useSelector((state: any) => state.twilio.twilioToken);
    const sid = useSelector((state: any) => state.twilio.sid);
    const messages = useSelector((state: any) => state.twilio.messages);
    const { userInfo } = useContext(AppContext);
    // const s = useSelector((state: any) => console.log(state.twilio))

    useEffect(() => {
        dispatch(getToken(userInfo));
        dispatch(getChatList());
    }, []);

    useEffect(() => {
        if (token) {
            const client = new Client(token);
            setClient(client);
            const getConvos = async () => {
                const convoList: any = await client.getSubscribedConversations();
                setConvos(convoList.items);
            };
            getConvos();

            client.on('messageAdded', (message: Message) => {
                dispatch(updateMessages(message, sid));
            });
        }
    }, [token]);

    return (
        <div className="outletConainer">
            <div className={styles.flexWrapper}>
                <div className={styles.contacts}>
                    <div className={styles.tab}>
                        <ul className={styles.tabHead}>
                            <Link to={''} onClick={() => setChatTab('Active Visit')} style={{ textDecoration: 'none' }}>
                                <li className={chatTab === 'Active Visit' ? styles.active : ''}>Active Visit</li>
                            </Link>
                            <Link to={''} onClick={() => setChatTab('Recent Visits')}>
                                <li className={chatTab === 'Recent Visits' ? styles.active : ''}>Recent Visits</li>
                            </Link>
                        </ul>
                    </div>
                    <SearchUser />
                    {convos.map((convo) => (
                        <ChatUser
                            convo={convo}
                            key={convo.sid}
                            convoId={convo.sid}
                            userInfo={userInfo}
                            onClick={async () => {
                                const participantList = await convo.getParticipants();
                                dispatch(getParticipants(participantList, convo.sid));
                                dispatch(updateCurrentConversation(convo.sid));
                            }}
                        />
                    ))}
                </div>
                <div className={styles.chatContainer}>
                    <Chat
                        client={client}
                        convo={convos.find((convo) => convo.sid === sid)}
                        userInfo={userInfo}
                        messages={messages[sid] ?? []}
                    />
                </div>
            </div>
        </div>
    );
};

export default Support;
