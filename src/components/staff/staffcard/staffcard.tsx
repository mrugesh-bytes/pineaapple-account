import React, { useState } from "react";
import styles from "./staffcard.module.css";
import iconEdit from "../../../images/icon-edit.svg";
import iconDelete from "../../../images/icon-delete.svg";
import { Roles } from "../../../constants/staffRole";
import RemoveStaff from "../removestaff/RemoveStaff";
import CustModal from "../../common/custmodal/CustModal";
const staffcard = ({ staff }: any) => {
	const backGC: any = {
		Admin: styles.staffAdmin,
		"General Manager": styles.staffGeneral,
		"Property Manager": styles.staffProperty,
		"Leasing Agent": styles.staffLeasing,
		Maintenance: styles.staffMaintenance,
	};

	const [deletePopup, setDeletePopup] = useState(false);

	const closeModal = () => {
		setDeletePopup(true);
	};

	return (
		<>
			<CustModal
				open={deletePopup}
				setOpen={setDeletePopup}
				bodyData={<RemoveStaff setDeletePopup={setDeletePopup} />}
			/>
			<div className={styles.staffCard}>
				<div className={styles.staffPhotoContainer}>
					<img src={staff.imageUrl} alt="Staff Image" />
					<p className={`${styles.staffPos} ${backGC[Roles[staff.role]]}`}>
						{Roles[staff.role]}
					</p>
				</div>
				<h2 className={styles.staffName}>{staff.name}</h2>
				<a href="mailto:employee@acme.apartments" className={styles.staffMail}>
					{staff.email}
				</a>
				<img className={styles.iconEdit} src={iconEdit} alt="icon Edit" />
				<img
					onClick={closeModal}
					className={styles.iconDelete}
					src={iconDelete}
					alt="icon Delete"
				/>
			</div>
		</>
	);
};

export default staffcard;
