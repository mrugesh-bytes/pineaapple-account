import React, { useEffect } from "react";
import styles from "./Chat.module.css";
import userAvatarImg from "../../../images/chat-user-1.svg";
import axios from "axios";
const Chat = () => {
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
      <div className={styles.chatBody}>
        <div className={styles.sender}>
          <p className={styles.message}>
            How was the tour? Please insert the key to the locker.
          </p>
          <span className={styles.dateTime}>09:05 AM</span>
        </div>
        <div className={styles.receiver}>
          <p className={styles.message}>
            Key Inserted to the locket but not able to acess
          </p>
          <span className={styles.dateTime}>09:06 AM</span>
        </div>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.chatFooter}>
          <input type="text" name="send" placeholder="Start To type..." />
          <button className={styles.sendBtn}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
