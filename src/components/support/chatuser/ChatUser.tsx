import React from "react";
import styles from "./ChatUser.module.css";
import userFirst from "../../../images/chat-user-1.svg";
import userSecond from "../../../images/chat-user-2.svg";
import userThird from "../../../images/chat-user-3.svg";
import moment from "moment";
const ChatUser = (props: any) => {
	return (
		<>
			<div>
				{props.chatData &&
					props.chatData.map((item: any, index: any) => {
						return (
							<div className={styles.userCard} key={index}>
								<div className={styles.userAvatar}>
									<img src={item.Image} alt="User Avatar" />
								</div>
								<div className={styles.userDetails}>
									<h2 className={styles.userName}>{item?.name}</h2>
									<p className={styles.userMsg}>I want to ask question about</p>
									<span className={styles.msgDate}>
										{moment(item.updatedAt).format("hh:mm a")}
									</span>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default ChatUser;
