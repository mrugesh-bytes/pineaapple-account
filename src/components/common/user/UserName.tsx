import React from "react";
import styles from "./User.module.css";

let user: any = localStorage.getItem("user");
user = JSON.parse(user);

const UserName = () => {
	return <span className={styles.subTitle}>{user.name}</span>;
};

export default UserName;
