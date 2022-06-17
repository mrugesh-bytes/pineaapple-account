import React from "react";
import styles from "./Key.module.css";
import iconKey from "../../../images/icon-key.svg";
const Key = () => {
	return (
		<div className={`${styles.key} ${styles.inUse}`}>
			<p>
				<img className={styles.iconKey} src={iconKey} alt="Icon Key" />
				<span>In use</span>
			</p>
		</div>
	);
};

export default Key;
