import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import templateStyle from "../../Templete.module.css";
import bellIcon from "../../../images/icon-bell.svg";
import UserName from "../../../components/common/user/UserName";
import UserAvatar from "../../../components/common/user/UserAvatar";

const Header = () => {
	return (
		<div className={styles.header}>
			<div></div>
			<div className={styles.search}>
				<input
					className={templateStyle.input}
					type="search"
					name="search"
					placeholder="Search for units, lockers, staff etc.. "
				/>
			</div>
			<div className={styles.userBox}>
				<div className={styles.notification}>
					<img src={bellIcon} alt="Notification"></img>
				</div>
				<div className={styles.user}>
					<div className={styles.userName}>
						<UserName />
					</div>
					<div className={styles.userAvatar}>
						<UserAvatar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
