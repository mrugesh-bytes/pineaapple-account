import React from "react";
import styles from "./ChatUser.module.css";
import moment from "moment";
import { AnyIfEmpty } from "react-redux";

interface IchatUser {
	chatData: [string] | undefined;
	setUserId: any;
}
const ChatUser = (props: IchatUser) => {
	return (
		<>
			<div>
				{props.chatData &&
					props.chatData.map((item: AnyIfEmpty<object>, index: number) => {
						return (
							<div
								className={styles.userCard}
								key={index}
								onClick={() => props.setUserId(item?.id)}
							>
								<div className={styles.userAvatar}>
									<img src={item?.Image} alt="User Avatar" />
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
