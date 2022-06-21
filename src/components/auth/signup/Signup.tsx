import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import eyeOpen from "../../../images/icon-eye-open.svg";
import eyeClose from "../../../images/icon-eye-close.svg";
const Signup = () => {
	return (
		<div className={styles.signupWrapper}>
			<h2 className={styles.signupTitle}>Sign Up to continue!</h2>
			<p className={styles.signupInfo}>
				Hey, Enter your details to get signup your account
			</p>
			<div className={styles.signupForm}>
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
				</div>
				<div className={styles.formWrapper}>
					<label>Confirm Password</label>
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
				</div>
				<div className={styles.formSubmit}>
					<button>Sign In</button>
				</div>
				<div className={styles.leadSignup}>
					<p>
						Already have an account?
						<Link to="/">Sign In</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
