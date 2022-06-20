import React, { useEffect, useState } from "react";
import SearchUser from "./searchuser/SearchUser";
import ChatUser from "./chatuser/ChatUser";
import Chat from "./chat/Chat";
import styles from "./Support.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { getChatList } from "../../redux/chat/actions/chatList.action";
import { useDispatch, useSelector } from "react-redux";
const Support = () => {
	const [chatTab, setChatTab] = useState("Active Visit");

	const chatListData = useSelector(
		(state: any) => state?.chatList?.data?.result?.visitorList
	);

	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatList());
  }, []);

	return (
		<div className="outletConainer">
			<div className={styles.flexWrapper}>
				<div className={styles.contacts}>
					<div className={styles.tab}>
						<ul className={styles.tabHead}>
							<Link
								to={""}
								onClick={() => setChatTab("Active Visit")}
								style={{ textDecoration: "none" }}
							>
								<li className={chatTab === "Active Visit" ? styles.active : ""}>
									Active Visit
								</li>
							</Link>
							<Link to={""} onClick={() => setChatTab("Recent Visits")}>
								<li
									className={chatTab === "Recent Visits" ? styles.active : ""}
								>
									Recent Visits
								</li>
							</Link>
						</ul>
					</div>
					<SearchUser />
					<ChatUser chatData={chatListData} />
				</div>
				<div className={styles.chatContainer}>
					<Chat />
				</div>
			</div>
		</div>
	);
};

export default Support;
