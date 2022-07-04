import React, { useContext, useEffect, useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import eyeOpen from '../../../images/icon-eye-open.svg';
import eyeClose from '../../../images/icon-eye-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../../redux/auth/actions/auth.action';
import { Roles } from '../../../constants/staffRole';
import { AppContext } from '../../context/AppContect';
import Loader from '../../common/loader/Loader';

const Login = () => {
    const [loginDetails, setLoginDetails]: any = useState({
        email: '',
        password: '',
    });
    const [showPass, setShowPass] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const appContext = useContext(AppContext);
    const userType = Roles.find((role: any) => role.value === localStorage.getItem('type'))?.label;

    const error = useSelector((state: any) => state?.authReducer?.error?.response?.statusText);
    const loading = useSelector((state: any) => state?.authReducer?.loading);
    const handleLoginDetails = (event: any) => {
        setLoginDetails({
            ...loginDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleSignIn = () => {
        dispatch(getAuth(loginDetails, onSuccess));
    };

    const onSuccess = (data: any) => {
        appContext.accessToken = data.token;
        appContext.userInfo = data.staff;
        navigate('/units');
    };

    useEffect(() => {
        if (!userType) navigate('/');
    }, []);

    return (
        <>
            {loading && <Loader />}
            <div className={styles.loginWrapper}>
                <h2 className={styles.loginTitle}>I’m {userType}!</h2>
                <p className={styles.loginInfo}>Hey, Enter your details to get sign In your account</p>
                <div className={styles.loginForm}>
                    <div className={error && error === 'Bad Request' ? styles.unauthorized : styles.formWrapper}>
                        <label>Email Id</label>
                        <input
                            type="email"
                            name="email"
                            value={loginDetails.email}
                            onChange={handleLoginDetails}
                            placeholder="Enter your email address"
                        />
                        <span className={styles.requiredInputInfo}>email id is incorrect! </span>
                    </div>
                    <div className={error && error === 'Unauthorized' ? styles.unauthorized : styles.formWrapper}>
                        <label>Password</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={showPass ? 'text' : 'password'}
                                name="password"
                                value={loginDetails.password}
                                onChange={handleLoginDetails}
                                placeholder="Enter your password"
                            />
                            <div className={styles.eyeToggler} onClick={() => setShowPass(!showPass)}>
                                <img src={!showPass ? eyeClose : eyeOpen} alt="Eye" />
                            </div>
                        </div>
                        <span className={styles.requiredInputInfo}>password is incorrect! </span>
                        <Link to="/">Trouble to get sign in?</Link>
                    </div>
                    <div className={styles.formSubmit}>
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
                    <div className={styles.leadSignup}>
                        <p>
                            Don’t have an account?
                            <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
