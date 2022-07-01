import React from "react";
import iconClose from "../../../images/icon-close.svg";
import Counter from "../../common/counter/Counter";
import Switch from "../../common/switch/Switch";
import styles from "./AddUnits.module.css";
import iconUpload from "../../../images/icon-upload-unit.svg";
import previewImg from "../../../images/preview-img-add-unit.png";
import iconClosePreview from "../../../images/icon-close-preview.svg";

const AddUnits = ({ setOpen }: any) => {
	const closeModal = () => {
		setOpen(false);
	};
	return (
		<div className={styles.modalAddStaff}>
			<div className={styles.modalHeader}>
				<div className={styles.modalTitle}>Add Unit</div>
				<span className={styles.close}>
					<img src={iconClose} onClick={closeModal} />
				</span>
			</div>
			<div className={styles.modalBody}>
				<div className={styles.fieldWrapper}>
					<label>Name</label>
					<input placeholder="Enter unit name" name="unit" />
				</div>
				<div className={styles.unitContainer}>
					<div className={styles.unitWrapper}>
						<label>Size (Ft)</label>
						<Counter />
					</div>
					<div className={styles.unitWrapper}>
						<label>Beds</label>
						<Counter />
					</div>
					<div className={styles.unitWrapper}>
						<label>Baths</label>
						<Counter />
					</div>
					<div className={styles.unitWrapper}>
						<label>Price</label>
						<input type="number" name="price" />
					</div>
					<div className={styles.unitWrapper}>
						<label>Status</label>
						<Switch />
					</div>
				</div>
				<div className={styles.unitUploadContainer}>
					<label>Unit Pictures</label>
					<div className={styles.uploadWrapper}>
						<input type="file"></input>
						<div className={styles.iconUnitUpload}>
							<img src={iconUpload} alt="Icon Upload" />
						</div>
						<p>Upload image from here</p>
						<div className={styles.previewImgContainer}>
							<div className={styles.imgWrapper}>
								<img
									className={styles.previewImg}
									src={previewImg}
									alt="Preview Image"
								/>
								<img
									className={styles.previewClose}
									src={iconClosePreview}
								></img>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.btnUploadContainer}>
					<button className={`${styles.btnUpload} ${styles.success}`}>
						Add Unit
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddUnits;
