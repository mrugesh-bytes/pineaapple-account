import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Unitscard from "./unitscard/Unitscard";
const index = () => {
	const [units, setUnits] = useState([]);
	const [locations, setLocations] = useState([]);

	const accessToken =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOiI4OWI5ZGQwYy0yYWY3LTQwODQtOGIyYi0xYWZiMmJlYjBjMmYiLCJhdWQiOiJTdGFmZiIsImV4cCI6MTY1Nzk1MDY0OSwiaWF0IjoxNjU1MzU4NjQ5LCJpZCI6IjlkMzAxMjkzLTYxOWMtNDdlZC1hY2E0LTE3YmI3YTBiODc1NSIsImlzcyI6IlBpbmVhcHBsZSIsIm5iZiI6MTY1NTM1ODY0OSwicm9sIjoxLCJzdWIiOiJKV1QifQ.ibXtQ4DiKL_jUHQkbkkXYQvsqDhcwTMk20LvQgNtVi4";
	useEffect(() => {
		const getUnits = async () => {
			await axios
				.get("https://dev.tourwithpineapple.com/account/units", {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				})
				.then((response) => {
					setUnits(response?.data?.result?.units);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		const getLocations = async () => {
			await axios
				.get("https://dev.tourwithpineapple.com/account/locations", {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				})
				.then((response) => {
					setLocations(response?.data?.result?.locations);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getUnits();
		getLocations();
	}, []);

	return (
		<div className="outletConainer">
			<div className={styles.unitsContainer}>
				<div className={styles.unitsHead}>
					<div className={styles.userGreet}>
						<p>Welcome Josue!</p>
						<h2>Units</h2>
					</div>
					<div className={styles.btnContainer}>
						<button className={styles.outline}>+ Add Unit</button>
						<button className={styles.btnGreen}>+ Add Location</button>
						<select>
							<option>park towne Place</option>
							<option>Place #2</option>
							<option>Place #3</option>
						</select>
					</div>
				</div>
				<div className={styles.unitcards}>
					{units &&
						units.map((unit: any, index: number) => {
							return <Unitscard unit={unit} key={index} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default index;
