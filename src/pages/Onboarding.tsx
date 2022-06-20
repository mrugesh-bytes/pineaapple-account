import React from "react";
import styles from "../template/outerlayout/outerlayout.module.css";
import Welcome from "../components/auth/welcome/Welcome";
import Login from "../components/auth/login/Login";
function Onboarding() {
	return (
		<form className={styles.loginForm}>
			<div className={styles.fieldWrapper}>
				<Login />
			</div>
		</form>
	);
}

export default Onboarding;
