import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import eyeOpen from "../../../images/icon-eye-open.svg";
import eyeClose from "../../../images/icon-eye-close.svg";
import { useDispatch } from "react-redux";
import { getRegister } from "../../../redux/auth/actions/signup.actions";

const Signup = () => {
	const [signupDetails, setSignupDetails]: any = useState({
		account: "TEST",
		admin: "AdminRole",
		email: "",
		password: "",
		phone: "1234567890",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userType = localStorage.getItem("type");

	const [showPass, setShowPass] = useState(false);
	const [confirmShowPass, setConfirmShowPass] = useState(false);

	const handleSignupDetails = (event: any) => {
		setSignupDetails({
			...signupDetails,
			[event.target.name]: event.target.value,
		});
	};

	const handleSignup = () => {
		dispatch(getRegister(signupDetails, onSuccess));
	};

	const onSuccess = () => {
		navigate("/units");
	};

	useEffect(() => {
		if (!userType) navigate("/");
	}, []);

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
						onChange={handleSignupDetails}
					/>
				</div>
				<div className={styles.formWrapper}>
					<label>Password</label>
					<div className={styles.passwordWrapper}>
						<input
							type={showPass ? "text" : "password"}
							name="password"
							placeholder="Enter your password"
							onChange={handleSignupDetails}
						/>
						<div
							className={styles.eyeToggler}
							onClick={() => setShowPass(!showPass)}
						>
							<img src={!showPass ? eyeClose : eyeOpen} alt="Eye" />
						</div>
					</div>
				</div>
				<div className={styles.formWrapper}>
					<label>Confirm Password</label>
					<div className={styles.passwordWrapper}>
						<input
							type={confirmShowPass ? "text" : "password"}
							name="password"
							placeholder="Enter your password"
							onChange={handleSignupDetails}
						/>
						<div
							className={styles.eyeToggler}
							onClick={() => setConfirmShowPass(!confirmShowPass)}
						>
							<img src={!confirmShowPass ? eyeClose : eyeOpen} alt="Eye" />
						</div>
					</div>
				</div>
				<div className={styles.formSubmit}>
					<button onClick={handleSignup}>Sign Up</button>
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
