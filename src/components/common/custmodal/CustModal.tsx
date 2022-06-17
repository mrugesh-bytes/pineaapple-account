import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import iconClose from "../../../images/icon-close.svg";
import styles from "./CustModal.module.css";
import iconRocket from "../../../images/icon-bg-rocket.svg";
import iconYellowKey from "../../../images/icon-bg-yellow-key.svg";
import iconRedKey from "../../../images/icon-bg-yellow-red.svg";
import iconReverseKey from "../../../images/icon-bg-reverse.svg";
const CustModal = (props: any) => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};
	console.log(props.cssStyle);

	function closeModal() {
		props.setOpen(false);
	}

	return (
		<div>
			{" "}
			<div>
				<Modal
					isOpen={props.open}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Modal"
				>
					<div className={styles.modalNotification}>
						<div className={styles.modalHeader}>
							<div className={styles.modalTitle}>Notification</div>
							<span className={styles.close}>
								<img src={iconClose} onClick={closeModal} />
							</span>
						</div>
						<div className={styles.modalBody}>
							<div className={styles.card}>
								<div className={styles.icon}>
									<img src={iconRocket} />
								</div>
								<div className={styles.content}>
									You are checked in. We received your photo ID & CC as a
									courtesy hold. Please begin your tour,
								</div>
								<div className={styles.radioContainer}>
									<input type="radio" name="radio" />
								</div>
							</div>
							<div className={styles.card}>
								<div className={styles.icon}>
									<img src={iconYellowKey} />
								</div>
								<div className={styles.content}>
									A key has not been returned to the locker
								</div>
								<div className={styles.radioContainer}>
									<input type="radio" name="radio" />
								</div>
							</div>
							<div className={styles.card}>
								<div className={styles.icon}>
									<img src={iconRedKey} />
								</div>
								<div className={styles.content}>
									A key has not been returned to the locker. Please return the
									key.
								</div>
								<div className={styles.radioContainer}>
									<input type="radio" name="radio" />
								</div>
							</div>
							<div className={styles.card}>
								<div className={styles.icon}>
									<img src={iconReverseKey} />
								</div>
								<div className={styles.content}>
									Your tour is ending in 5 min, please return the key to a
									locker.
								</div>
								<div className={styles.radioContainer}>
									<input type="radio" name="radio" />
								</div>
							</div>
							<div className={styles.card}>
								<div className={styles.icon}>
									<img src={iconRedKey} />
								</div>
								<div className={styles.content}>
									We did not see you return the (Name of the property) by
									DD/MM//YYYY, your CC was charged $xxx. xx.
								</div>
								<div className={styles.radioContainer}>
									<input type="radio" name="radio" />
								</div>
							</div>
						</div>
						<div className={styles.modalFooter}>
							<button onClick={closeModal} className={styles.cancelBtn}>
								Cancel
							</button>
							<button className={styles.sendBtn}>Send Notification</button>
						</div>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default CustModal;
