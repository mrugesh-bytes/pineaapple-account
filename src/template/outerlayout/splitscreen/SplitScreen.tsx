import React from "react";
import styles from "./SplitScreen.module.css";
import logo from "../../../images/pineapple-logo.svg";
import formImage from "../../../images/split-banner.svg";
const SplitScreen = () => {
	return (
		<div className={styles.container}>
			<div className={styles.formOuter}>
				<div className={styles.logoContainer}>
					<img src={logo}></img>
				</div>
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
				<div className={styles.footer}>
					<p>Copyright @bytesTechnolabs 2022</p>
				</div>
			</div>
			<div className={styles.banner}>
				<img className={styles.w100} src={formImage}></img>
			</div>
		</div>
	);
};

export default SplitScreen;
