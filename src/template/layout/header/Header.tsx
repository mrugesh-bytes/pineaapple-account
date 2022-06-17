import React from "react";
import styles from "./Header.module.css";
import templateStyle from "../../Templete.module.css";
import bellIcon from "../../../images/icon-bell.svg";
import userAvatar from "../../../images/user-avatar.svg";
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
					<div className={styles.userName}>Josue Shultz</div>
					<div className={styles.userAvatar}>
						<img src={userAvatar} alt="User Avatar" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
