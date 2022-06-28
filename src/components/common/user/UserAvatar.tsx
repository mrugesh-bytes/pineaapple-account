import React from "react";

let user: any = localStorage.getItem("user");
user = JSON.parse(user);

const UserAvatar = () => {
	return <img src={user.imageUrl} alt="User Avatar" />;
};

export default UserAvatar;
