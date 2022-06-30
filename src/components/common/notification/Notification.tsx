import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notification.module.css';
import userAvatar from '../../../images/chat-user-1.svg';

const Notification = () => {
    return (
        <div className={styles.notificationWrapper}>
            <div className={styles.notificationHeader}>
                <h2 className={styles.notificationTitle}>Notifications</h2>
                <Link to="/">Mark All Read</Link>
            </div>
            <div className={styles.notificationBody}>
                <div className={`${styles.notificationCard} ${styles.unread}`}>
                    <div className={styles.userAvatar}>
                        <img src={userAvatar} alt="Avatar" />
                    </div>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardTitle}>Geraldine Mcdonald has asked for the support</h2>
                        <p className={styles.notificationTime}>4 mins ago</p>
                    </div>
                </div>
                <div className={styles.notificationCard}>
                    <div className={styles.userAvatar}>
                        <img src={userAvatar} alt="Avatar" />
                    </div>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardTitle}>Geraldine Mcdonald has asked for the support</h2>
                        <p className={styles.notificationTime}>16 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
