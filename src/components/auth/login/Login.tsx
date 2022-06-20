import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import eyeOpen from "../../../images/icon-eye-open.svg";
import eyeClose from "../../../images/icon-eye-close.svg";
const Login = () => {
	return (
		<div className={styles.loginWrapper}>
			<h2 className={styles.loginTitle}>I’m Admin!</h2>
			<p className={styles.loginInfo}>
				Hey, Enter your details to get sign In your account
			</p>
			<div className={styles.loginForm}>
				<div className={styles.formWrapper}>
					<label>Email Id</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email address"
					/>
				</div>
				<div className={styles.formWrapper}>
					<label>Password</label>
					<div className={styles.passwordWrapper}>
						<input
							type="password"
							name="password"
							placeholder="Enter your password"
						/>
						<div className={styles.eyeToggler}>
							<img src={eyeOpen} alt="Eye Open" />
							<img src={eyeClose} alt="Eye Close" />
						</div>
					</div>
					<Link to="/">Trouble to get sign in?</Link>
				</div>
				<div className={styles.formSubmit}>
					<button>Sign In</button>
				</div>
				<div className={styles.leadSignup}>
					<p>
						Don’t have an account?
						<Link to="/">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
