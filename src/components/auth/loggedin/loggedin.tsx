import React from "react";
import { Link } from "react-router-dom";
import styles from "./loggedin.module.css";

const loggedin = () => {
	return (
		<div className={styles.loggedinWrapper}>
			<h2 className={styles.loggedinTitle}>Welcome Back!</h2>
			<div className={styles.loggedinUser}>
				<span className={styles.userInitial}>L</span>
				<p className={styles.userEmail}>leasignagent25@pineapple.com</p>
			</div>
			<p className={styles.linkLogin}>
				Not you? <Link to="/login">Use another account</Link>
			</p>
			<div className={styles.btnWrapper}>
				<button>Sign In</button>
			</div>
			<p className={styles.linkSignup}>
				Don’t have an account? <Link to="/signup">Sign Up</Link>
			</p>
		</div>
	);
};

export default loggedin;
