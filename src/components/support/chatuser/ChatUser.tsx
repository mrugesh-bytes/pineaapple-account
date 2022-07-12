import React, { useEffect, useState } from 'react';
import styles from './ChatUser.module.css';
import moment from 'moment';
import { AnyIfEmpty, useDispatch } from 'react-redux';
import { getMessages } from '../../../redux/twilio/actions/twilio.actions';

interface IchatUser {
    chatData: [string] | undefined;
}
const ChatUser = (props: any) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [lastMessage, setLastMessage] = useState('');
    const { convo, convoId, key, onClick, userInfo } = props;

    useEffect(() => {
        const getParticipants = (async () => {
            const participant = await convo.getParticipants();
            const user = participant.find((p: any) => p.identity !== userInfo.name);
            if (user) {
                setUserName(user.state.identity);
                const messages = await convo.getMessages();
                setLastMessage(messages?.items[messages?.items?.length - 1].body);
                dispatch(getMessages(messages.items, convo.sid));
            }
        })();
    }, []);
    return (
        <>
            {userName.length > 0 && (
                <div className={styles.userCard} key={key} onClick={onClick}>
                    <div className={styles.userAvatar}>
                        <img src={convo?.Image} alt="User Avatar" />
                    </div>
                    <div className={styles.userDetails}>
                        <h2 className={styles.userName}>{userName}</h2>
                        <p className={styles.userMsg}>{lastMessage}</p>
                        <span className={styles.msgDate}>{moment(convo?.lastMessage?.dateCreated).format('hh:mm a')}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatUser;
