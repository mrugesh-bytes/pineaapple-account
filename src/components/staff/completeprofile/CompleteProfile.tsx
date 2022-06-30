import React from "react";
import defaultProfilePic from "../../../images/default_profile_pic.png";
import uploadAvatar from "../../../images/upload-avatar.svg";
import _ from "lodash";
import styles from "./CompleteProfile.module.css";

const CompleteProfile = ({ setOpen }: any) => {
	return (
		<div>
			<div>
				<div className={`${styles.modalAddStaff}`}>
					<div className={styles.modalHeader}>
						<div className={styles.modalTitle}>
							Complete your profle
						</div>
					</div>
					<form>
						<div className={styles.modalBody}>
							<div className={styles.staffPhoto}>
								<img
									className={styles.staffAvatar}
									src={defaultProfilePic}
									alt="Add Staff"
								/>
								<img
									className={styles.uploadAvatar}
									src={uploadAvatar}
									alt="Upload Avatar"
								></img>
								<input
									type="file"
									name="upload-avatar"
									accept="image/*"
								/>
							</div>
							<div className={styles.formStaff}>
								<div className={styles.field}>
									<label>Name</label>
									<input
										type="text"
										placeholder="Enter your name"
									></input>
								</div>
								<div className={styles.field}>
									<label>Email Id</label>
									<input
										type="email"
										placeholder="Enter your email id"
									></input>
								</div>
								<div className={styles.field}>
									<label>Contact No.</label>
									<div className={styles.fieldWrapper}>
										<input type="number" />
										<button
											onClick={(e: any) =>
												e.preventDefault()
											}
											className={styles.fieldBtn}
										>
											Get OTP
										</button>
									</div>
								</div>
								<div className={styles.field}>
									<label>Locality</label>
									<input
										type="text"
										placeholder="Enter your locality"
									/>
								</div>
							</div>
							<div className={styles.modalFooter}>
								<button
									className={`${styles.sendBtn} ${styles.verified}`}
								>
									Update Profile
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CompleteProfile;
