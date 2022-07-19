import React, { useEffect, useRef, useState } from 'react';
import styles from './Chat.module.css';
import userAvatarImg from '../../../images/chat-user-1.svg';
import moment from 'moment';
import { Message, Paginator } from '@twilio/conversations';
import { useDispatch } from 'react-redux';
import { getMessages, pushMessages } from '../../../redux/twilio/actions/twilio.actions';
import { CONVERSATION_PAGE_SIZE, MAX_FILE_SIZE } from '../../../constants/constants';

const Chat = ({ convo, messages, userInfo }: any) => {
    const dispatch = useDispatch();
    const messageDiv: any = useRef<HTMLDivElement>(null);
    const [text, setText] = useState('');
    const [paginator, setPaginator] = useState<Paginator<Message> | null>(null);
    const [hasMore, setHasMore] = useState(messages.length === CONVERSATION_PAGE_SIZE);

    useEffect(() => {
        const msgs = async () => {
            const messageList = await convo?.getMessages();
            if (messageList?.hasPrevPage) {
                setPaginator(messageList);
                setHasMore(messageList?.hasPrevPage);
            }
            messageList && dispatch(getMessages(messageList?.items, convo?.sid));
        };
        msgs();
    }, [convo]);

    useEffect(() => {
        messageDiv.current?.scrollIntoView({ block: 'end' });
    }, [messages]);

    const sendMessage = async () => {
        if (String(text).trim()) {
            await convo.sendMessage(String(text).trim());
            setText('');
        }
    };

    const fetchMore = async () => {
        if (!paginator) {
            return;
        }

        const result = await paginator?.prevPage();
        if (!result) return;

        const moreMessages = result.items;
        setPaginator(result);
        setHasMore(result.hasPrevPage);
        dispatch(pushMessages(moreMessages, convo.sid));
    };

    return (
        <div key={convo?.sid}>
            <div className={styles.chatHeader}>
                <div className={styles.userAvatar}>
                    <img src={userAvatarImg} alt="User Avatar" />
                </div>
                <div className={styles.userDetails}>
                    <h2>
                        park towne Place <span className={styles.price}>$600</span>
                    </h2>
                    <p>
                        Gustavo Daniels <span className={styles.active}>Active</span>
                    </p>
                </div>
            </div>
            {messages && (
                <div id="chatbody" className={styles.chatBody}>
                    {hasMore && <button onClick={fetchMore}>Load More</button>}
                    <div ref={messageDiv} key={convo?.sid} id="chatContent">
                        {messages.map((message: any, index: any) =>
                            message.author === userInfo.name ? (
                                <div className={styles.sender} key={index}>
                                    <p className={styles.message}>{message.body}</p>
                                    <span className={styles.dateTime}>{moment(message.dateUpdated).format('hh:mm a')}</span>
                                </div>
                            ) : (
                                <div className={styles.receiver}>
                                    <p className={styles.message}>{message.body}</p>
                                    <span className={styles.dateTime}>{moment(message.dateUpdated).format('hh:mm a')}</span>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            )}
            <div className={styles.footerMain}>
                <div className={styles.chatFooter}>
                    <input
                        type="text"
                        name="send"
                        value={text}
                        placeholder="Start To type..."
                        onChange={(e: any) => setText(e.target.value)}
                    />
                    <button
                        className={text ? styles.sendBtn : `${styles.sendBtn} ${styles.sendBtnDisabled}`}
                        onClick={sendMessage}
                        disabled={!text}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
