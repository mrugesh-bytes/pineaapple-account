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
						<option>Engineer</option>
						<option>Doctor</option>
						<option>Teacher</option>
						<option>Musician</option>
					</select>
				</div>
			</div>
		</form>
	);
}

export default Onboarding;
