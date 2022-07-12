import React, { useState } from 'react';
import styles from './Chat.module.css';
import userAvatarImg from '../../../images/chat-user-1.svg';
import moment from 'moment';



const Chat = ({ divRef, scrollToBottom, convo, messages, userInfo }: any) => {
    const [text, setText] = useState('');

    const sendMessage = async () => {
        if (String(text).trim()) {
            await convo.sendMessage(String(text).trim());
            setText('');
            scrollToBottom();
        }
    };

    return (
        <div>
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
                <div ref={divRef} id="chatbody" className={styles.chatBody}>
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
                    <button className={styles.sendBtn} onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
