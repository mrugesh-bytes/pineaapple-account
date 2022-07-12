import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';
import eyeOpen from '../../../images/icon-eye-open.svg';
import eyeClose from '../../../images/icon-eye-close.svg';
import { useDispatch } from 'react-redux';
import { getRegister } from '../../../redux/auth/actions/signup.actions';

const Signup = () => {
    const [signupDetails, setSignupDetails]: any = useState({
        account: 'TEST',
        admin: 'AdminRole',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPass, setShowPass] = useState(false);
    const [confirmShowPass, setConfirmShowPass] = useState(false);
    const [error, setError] = useState({
        emailError: false,
        passwordError: false,
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userType = localStorage.getItem('type');

    const handleSignupDetails = (event: any) => {
        setError({
            emailError: false,
            passwordError: false,
        });
        setSignupDetails({
            ...signupDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleSignup = (e: any) => {
        e.preventDefault();
        if (signupDetails.email.length === 0) {
            setError({ ...error, emailError: true });
            return;
        } else if (signupDetails.password !== signupDetails.confirmPassword) {
            setError({ ...error, passwordError: true });
            return;
        }
        dispatch(getRegister(signupDetails, onSuccess));
    };

    const onSuccess = () => {
        navigate('/units');
    };

    useEffect(() => {
        if (!userType) navigate('/');
    }, []);

    return (
        <div className={styles.signupWrapper}>
            <h2 className={styles.signupTitle}>Sign Up to continue!</h2>
            <p className={styles.signupInfo}>Hey, Enter your details to get signup your account</p>
            <div className={styles.signupForm}>
                <form onSubmit={handleSignup}>
                    <div className={!error.emailError ? styles.formWrapper : `${styles.formWrapper} ${styles.error}`}>
                        <label>Email Id</label>
                        <input type="email" name="email" placeholder="Enter your email address" onChange={handleSignupDetails} />
                        <p className={styles.errorText}>Please enter valid email.</p>
                    </div>
                    <div className={styles.formWrapper}>
                        <label>Password</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={showPass ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                onChange={handleSignupDetails}
                            />
                            <div className={styles.eyeToggler} onClick={() => setShowPass(!showPass)}>
                                <img src={!showPass ? eyeClose : eyeOpen} alt="Eye" />
                            </div>
                        </div>
                    </div>
                    <div className={!error.passwordError ? styles.formWrapper : `${styles.formWrapper} ${styles.error}`}>
                        <label>Confirm Password</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={confirmShowPass ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Enter your password"
                                onChange={handleSignupDetails}
                            />
                            <div className={styles.eyeToggler} onClick={() => setConfirmShowPass(!confirmShowPass)}>
                                <img src={!confirmShowPass ? eyeClose : eyeOpen} alt="Eye" />
                            </div>
                        </div>
                        <p className={styles.errorText}>Please enter password.</p>
                    </div>
                    <div className={styles.formSubmit}>
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className={styles.leadSignup}>
                        <p>
                            Already have an account?
                            <Link to="/">Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
