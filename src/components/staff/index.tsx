import React from "react";
import styles from "./index.module.css";
import Staffcard from "./staffcard/staffcard";
const index = () => {
	return (
		<div className={styles.dashboardStaff}>
			<div className={styles.flexContainer}>
				<div className={styles.titleInfo}>
					<p className={styles.subTitle}>Welcome, Josue!</p>
					<h2 className={styles.title}>Staff</h2>
				</div>
				<div className={styles.btnWrapper}>
					<button className={styles.btnGreenOutline}>Upload Staff</button>
					<button className={styles.btnGreen}>+ Add Staff</button>
				</div>
			</div>
			<div className={styles.staffCardMain}>
				<div className={styles.staffCardConatiner}>
					<Staffcard />
				</div>
				<div className={styles.staffCardConatiner}>
					<Staffcard />
				</div>
				<div className={styles.staffCardConatiner}>
					<Staffcard />
				</div>
				<div className={styles.staffCardConatiner}>
					<Staffcard />
				</div>
			</div>
		</div>
	);
};

export default index;
