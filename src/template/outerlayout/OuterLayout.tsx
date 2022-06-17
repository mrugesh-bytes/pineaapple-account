import React from "react";
import styles from "./outerlayout.module.css";
import logo from "../../images/pineapple-logo.svg";
import formImage from "../../images/split-banner.svg";
import { Outlet } from "react-router-dom";
const OuterLayout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.formOuter}>
				<div className={styles.logoContainer}>
					<img src={logo}></img>
				</div>
				<Outlet />
				<div className={styles.footer}>
					<p>Copyright @bytesTechnolabs 2022</p>
				</div>
			</div>
			<div className={styles.banner}>
				<img className={styles.w100} src={formImage}></img>
			</div>
		</div>
	);
};

export default OuterLayout;
