import React from "react";
import styles from "./SearchUser.module.css";
const SearchUser = () => {
	return (
		<div>
			<div className={styles.searchContainer}>
				<div className={styles.search}>
					<input type="search" name="search" placeholder="Search support..." />
				</div>
			</div>
		</div>
	);
};

export default SearchUser;
