import React, { useState } from "react";
import styles from "../template/outerlayout/outerlayout.module.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const options = [
	{ value: "admin", label: "Admin" },
	{ value: "general manager", label: "General Manager" },
	{ value: "property manager", label: "Property Manager" },
	{ value: "leasing agent", label: "Leasing Agent" },
	{ value: "maintenence", label: "Maintenence" },
];

function Onboarding() {
	const navigate = useNavigate();

	const handleChange = (event: any) => {
		localStorage.setItem("type", event.label);
		navigate("/login");
	};

	return (
		<form>
			<div className={styles.fieldWrapper}>
				<div>
					<label>Hi! I’m A</label>
				</div>
				<div className={styles.field}>
					<Select
						placeholder="Select a role"
						onChange={handleChange}
						options={options}
						className={styles.customSelect}
					/>
				</div>
			</div>
		</form>
	);
}

export default Onboarding;
