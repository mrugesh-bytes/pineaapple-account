import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContect';
import styles from './User.module.css';

const UserName = () => {
    const appContect = useContext(AppContext);
    const [userInfo, serUserInfo] = useState(appContect.userInfo || {});
    return <span className={styles.subTitle}>{userInfo.name}</span>;
};

export default UserName;
