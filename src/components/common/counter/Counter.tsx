import React from "react";
import styles from "./Counter.module.css";
const Counter = () => {
	return (
		<div className={styles.counterWrapper}>
			<span className={`${styles.iconCounter} ${styles.decrement}`}>
				-
			</span>
			<input type="number" name="counter" />
			<span className={`${styles.iconCounter} ${styles.increment}`}>
				+
			</span>
		</div>
	);
};

export default Counter;
