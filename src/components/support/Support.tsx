import React from "react";
import SearchUser from "./searchuser/SearchUser";
import ChatUser from "./chatuser/ChatUser";
import Chat from "./chat/Chat";
import styles from "./Support.module.css";
const Support = () => {
	return (
		<div className="outletConainer">
			<div className={styles.flexWrapper}>
				<div className={styles.contacts}>
					<div className={styles.tab}>
						<ul className={styles.tabHead}>
							<li className={styles.active}>Active Visit</li>
							<li>Recent Visits</li>
						</ul>
					</div>
					<SearchUser />
					<ChatUser />
				</div>
				<div className={styles.chatContainer}>
					<Chat />
				</div>
			</div>
		</div>
	);
};

export default Support;
