import React from "react";
import styles from "./ChatUser.module.css";
import userFirst from "../../../images/chat-user-1.svg";
import userSecond from "../../../images/chat-user-2.svg";
import userThird from "../../../images/chat-user-3.svg";
const ChatUser = () => {
	return (
		<>
			<div className={styles.userCard}>
				<div className={styles.userAvatar}>
					<img src={userFirst} alt="User Avatar" />
				</div>
				<div className={styles.userDetails}>
					<h2 className={styles.userName}>Elijah Horton</h2>
					<p className={styles.userMsg}>I want to ask question about</p>
					<span className={styles.msgDate}>09:30</span>
				</div>
			</div>
			<div className={styles.userCard}>
				<div className={styles.userAvatar}>
					<img src={userSecond} alt="User Avatar" />
				</div>
				<div className={styles.userDetails}>
					<h2 className={styles.userName}>Jessica Fields</h2>
					<p className={styles.userMsg}>I want to ask question about</p>
					<span className={styles.msgDate}>09:30</span>
				</div>
			</div>
			<div className={styles.userCard}>
				<div className={styles.userAvatar}>
					<img src={userThird} alt="User Avatar" />
				</div>
				<div className={styles.userDetails}>
					<h2 className={styles.userName}>Geraldine Mcdonald</h2>
					<p className={styles.userMsg}>I want to ask question about</p>
					<span className={styles.msgDate}>09:30</span>
				</div>
			</div>
		</>
	);
};

export default ChatUser;
