import React, { useState } from "react";
import styles from "../template/outerlayout/outerlayout.module.css";
import Select from "react-select";
const options = [
	{ value: "admin", label: "Admin" },
	{ value: "general manager", label: "General Manager" },
	{ value: "property manager", label: "Property Manager" },
	{ value: "leasing agent", label: "Leasing Agent" },
	{ value: "maintenence", label: "Maintenence" },
];

function Onboarding() {
	const [selectedOption, setSelectedOption]: any = useState(null);
	return (
		<form>
			<div className={styles.fieldWrapper}>
				<div>
					<label>Hi! I’m A</label>
				</div>
				<div className={styles.field}>
					<Select
						placeholder="Select a role"
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={options}
						className={styles.customSelect}
					/>
				</div>
			</div>
		</form>
	);
}

export default Onboarding;
