import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoggedIn.module.css";

const LoggedIn = ({email}: any) => {
	const navigate = useNavigate()
	
	return (
		<div className={styles.loggedinWrapper}>
			<h2 className={styles.loggedinTitle}>Welcome Back!</h2>
			<div className={styles.loggedinUser}>
				<span className={styles.userInitial}>{email.split('')[0].toUpperCase()}</span>
				<p className={styles.userEmail}>{email}</p>
			</div>
			<p className={styles.linkLogin}>
				Not you? <Link onClick={() => localStorage.clear()} to="/login">Use another account</Link>
			</p>
			<div className={styles.btnWrapper}>
				<button onClick={() => navigate('/units')}>Sign In</button>
			</div>
			<p className={styles.linkSignup}>
				Don’t have an account? <Link to="/signup">Sign Up</Link>
			</p>
		</div>
	);
};

export default LoggedIn;
