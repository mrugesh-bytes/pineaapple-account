import React, { useEffect, useState } from "react";
import iconClose from "../../images/icon-close.svg";
import styles from "./UnitNotification.module.css";
import iconRocket from "../../images/icon-bg-rocket.svg";
import iconYellowKey from "../../images/icon-bg-yellow-key.svg";
import iconRedKey from "../../images/icon-bg-yellow-red.svg";
import iconReverseKey from "../../images/icon-bg-reverse.svg";
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import { getNotificationList } from "../../redux/notification/actions/getNotification.action";
import { notifyVisitor } from "../../redux/notification/actions/notifyVisitor.action";

const UnitNotification = ({ setOpen }: any) => {
	const dispatch = useDispatch();
	const notificationList = useSelector(
		(state: any) => state?.notificationList?.data?.result?.templates
	);

	const [notificationListArrayWithIcons, setNotificationListArrayWithIcons] =
		useState([]);
	const [messageId, setMessageId] = useState("");

	const ICONS_ARRAY = [
		{ iconsName: iconRocket },
		{ iconsName: iconYellowKey },
		{ iconsName: iconRedKey },
		{ iconsName: iconReverseKey },
		{ iconsName: iconRedKey },
	];

	function closeModal() {
		setOpen(false);
	}

	useEffect(() => {
		dispatch(getNotificationList());
	}, []);

	useEffect(() => {
		const data =
			notificationList &&
			notificationList.map((data: any, index: number) => ({
				data,
				...ICONS_ARRAY[index],
			}));

		setNotificationListArrayWithIcons(data);
	}, [notificationList]);

	const radioButtonHandler = (id: string) => {
		setMessageId(id);
	};

	const sendNotificationHandler = () => {
		dispatch(notifyVisitor(messageId, "5f1a2e44-eb1f-4a06-af11-4ffe00a598e4"));
	};

	return (
		<div>
			<div className={styles.modalNotification}>
				<div className={styles.modalHeader}>
					<div className={styles.modalTitle}>Notification</div>
					<span className={styles.close}>
						<img src={iconClose} onClick={closeModal} />
					</span>
				</div>
				<div className={styles.modalBody}>
					{notificationListArrayWithIcons &&
						notificationListArrayWithIcons?.map((data: AnyIfEmpty<object>) => (
							<div key={data.data.id} className={styles.card}>
								<div className={styles.icon}>
									<img src={data?.iconsName} />
								</div>
								<div className={styles.content}>{data?.data?.body}</div>
								<div
									onClick={() => radioButtonHandler(data.data.id)}
									className={styles.radioContainer}
								>
									<input type="radio" name="radio" />
								</div>
							</div>
						))}
				</div>
				<div className={styles.modalFooter}>
					<button onClick={closeModal} className={styles.cancelBtn}>
						Cancel
					</button>
					<button onClick={sendNotificationHandler} className={styles.sendBtn}>
						Send Notification
					</button>
				</div>
			</div>
		</div>
	);
};

export default UnitNotification;
