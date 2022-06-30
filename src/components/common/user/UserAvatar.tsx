import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContect';

const UserAvatar = () => {
    const appContect = useContext(AppContext);
    const [userInfo, serUserInfo] = useState(appContect.userInfo || {});
    return <img src={userInfo.imageUrl} alt="User Avatar" />;
};

export default UserAvatar;
