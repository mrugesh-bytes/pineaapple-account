import React from "react";
import styles from "../template/outerlayout/outerlayout.module.css";

function Onboarding() {
	return (
		<form>
			<div className={styles.fieldWrapper}>
				<div>
					<label>Hi! I’m A</label>
				</div>
				<div className={styles.field}>
					<select>
						<option>Admin</option>
						<option>General Manager</option>
						<option>Property Manager</option>
						<option>Leasing Agent</option>
						<option>Maintenence</option>
					</select>
				</div>
			</div>
		</form>
	);
}

export default Onboarding;
