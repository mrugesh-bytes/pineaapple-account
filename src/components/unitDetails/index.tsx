import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import iconBack from "../../../src/images/icon-chevron-left.svg";
import iconFt from "../../../src/images/icon-ft.svg";
import iconBed from "../../../src/images/icon-bed.svg";
import iconBathtub from "../../../src/images/icon-bathtub.svg";
import iconEdit from "../../../src/images/icon-edit.svg";
import iconDelete from "../../../src/images/icon-delete.svg";
import iconActionBell from "../../../src/images/icon-action-bell.svg";
import iconActionMsg from "../../../src/images//icon-action-message.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "../common/slider/Slider";
import CustModal from "../common/custmodal/CustModal";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";

const UnitDetails = () => {
	const [open, setOpen] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	searchParams.get("id");
	console.log(searchParams.get("id"));

	const accessToken =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOiI4OWI5ZGQwYy0yYWY3LTQwODQtOGIyYi0xYWZiMmJlYjBjMmYiLCJhdWQiOiJTdGFmZiIsImV4cCI6MTY1Nzk1MDY0OSwiaWF0IjoxNjU1MzU4NjQ5LCJpZCI6IjlkMzAxMjkzLTYxOWMtNDdlZC1hY2E0LTE3YmI3YTBiODc1NSIsImlzcyI6IlBpbmVhcHBsZSIsIm5iZiI6MTY1NTM1ODY0OSwicm9sIjoxLCJzdWIiOiJKV1QifQ.ibXtQ4DiKL_jUHQkbkkXYQvsqDhcwTMk20LvQgNtVi4";

	useEffect(() => {
		const getUnits = async () => {
			await axios
				.get(`https://dev.tourwithpineapple.com/visit/unit`, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getUnits();
	}, []);

	return (
		<>
			<CustModal
				cssStyle={styles.notificationModal}
				open={open}
				setOpen={setOpen}
			/>
			<div className={styles.outletConainer}>
				<div className={styles.flexWrapper}>
					<div className={styles.unitDetails}>
						<div className={styles.flexContainer}>
							<div className={styles.cartDetailsHeader}>
								<div className={styles.cartDetailsBack}>
									<img src={iconBack} />
								</div>
								<div>
									<h2 className={styles.cartDetailsPlace}>Park Towne Place</h2>
									<p>
										Gustavo Daniels <span>Active</span>
									</p>
								</div>
							</div>
							<div className={styles.unitDetailsAction}>
								<div className={styles.iconedit}>
									<img src={iconEdit} alt="Edit" />
								</div>
								<div className={styles.icondelete}>
									<img src={iconDelete} alt="Delete" />
								</div>
							</div>
						</div>
						<Slider />
						<div className={styles.facilities}>
							<div className={styles.facility}>
								<div className={styles.facilityicon}>
									<img src={iconFt} alt="Ft" />
								</div>
								<div className={styles.facilityName}>80 ft</div>
							</div>
							<div className={styles.facility}>
								<div className={styles.facilityicon}>
									<img src={iconBed} alt="Beds" />
								</div>
								<div className={styles.facilityName}>2 Beds</div>
							</div>
							<div className={styles.facility}>
								<div className={styles.facilityicon}>
									<img src={iconBathtub} alt="Bathtubs" />
								</div>
								<div className={styles.facilityName}>1 Bath</div>
							</div>
						</div>
						<div className={styles.btnContainer}>
							<button className={styles.btnGreen}>Active Visit</button>
							<button className={styles.btnOutlineBlack}>Recent Visit</button>
						</div>
						<div className={styles.tableContainer}>
							<table>
								<tr>
									<th>Date</th>
									<th>Username</th>
									<th>Time in</th>
									<th>Time Out</th>
									<th>Action</th>
								</tr>
								<tr>
									<td>30th May, 2022</td>
									<td>Gustavo Daniels</td>
									<td>13:00</td>
									<td>13:45</td>
									<td>
										<img
											onClick={() => setOpen(true)}
											src={iconActionBell}
											alt="Bell"
										/>
										<img src={iconActionMsg} alt="Message" />
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div className={styles.unitsMap}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8188202846154!2d72.52843751529807!3d23.03042368494914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d571f08ca9%3A0xfd811e730a325cb1!2sBytes%20Technolab%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1655277219391!5m2!1sen!2sin"
							width="600"
							height="450"
							loading="lazy"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
};

export default UnitDetails;
