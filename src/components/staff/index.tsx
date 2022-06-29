import React, { useEffect, useState } from "react";
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import { getStaff } from "../../redux/staff/actions/staff.action";
import CustModal from "../common/custmodal/CustModal";
import AddStaff from "./addstaff/AddStaff";
import styles from "./index.module.css";
import Staffcard from "./staffcard/staffcard";
import UploadStaff from "./uploadstaff/UploadStaff";
import UserName from "../common/user/UserName";
import Toast from "../common/toast/Toast";

const index = (props: any) => {
	const [open, setOpen] = useState(false);
	const [upload, setUpload] = useState(false);

	const showToast = useSelector((state: any) => state.addStaffToast.showToast);

	const dispatch = useDispatch();

	const staffData = useSelector(
		(state: AnyIfEmpty<object>) => state?.staff?.data?.result?.staff
	);
	useEffect(() => {
		dispatch(getStaff());
	}, []);

	return (
		<>
			{showToast && <Toast />}
			<CustModal
				open={open}
				setOpen={setOpen}
				bodyData={<AddStaff setOpen={setOpen} />}
			/>
			<CustModal
				open={upload}
				setOpen={setUpload}
				bodyData={<UploadStaff setOpen={setUpload} />}
			/>
			<div className={styles.dashboardStaff}>
				<div className={styles.flexContainer}>
					<div className={styles.titleInfo}>
						Welcome <UserName />
						<h2 className={styles.title}>Staff</h2>
					</div>
					<div className={styles.btnWrapper}>
						<button
							onClick={() => setUpload(true)}
							className={styles.btnGreenOutline}
						>
							Upload Staff
						</button>
						<button onClick={() => setOpen(true)} className={styles.btnGreen}>
							+ Add Staff
						</button>
					</div>
				</div>
				<div className={styles.staffCardMain}>
					{staffData &&
						staffData.map((staff: any) => (
							<div className={styles.staffCardConatiner} key={staff.id}>
								<Staffcard staff={staff} />
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default index;
