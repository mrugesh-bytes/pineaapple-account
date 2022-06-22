import React from "react";
import styles from "./staffcard.module.css";
import avatarStaff from "../../../images/staff-avatar.svg";
import iconEdit from "../../../images/icon-edit.svg";
import iconDelete from "../../../images/icon-delete.svg";
import { Roles } from "../../../constants/staffRole";

const staffcard = ({ staff }: any) => {
  const backGC: any = {
    "Admin": styles.staffAdmin,
    "General Manager": styles.staffGeneral,
    "Property Manager": styles.staffProperty,
    "Leasing Agent": styles.staffLeasing,
    "Maintenance": styles.staffMaintenance,
  };

  return (
    <div className={styles.staffCard}>
      <div className={styles.staffPhotoContainer}>
        <img src={staff.imageUrl} alt={avatarStaff} />
        <p className={`${styles.staffPos} ${backGC[Roles[staff.role]]}`}>
          {Roles[staff.role]}
        </p>
      </div>
      <h2 className={styles.staffName}>{staff.name}</h2>
      <a href="mailto:employee@acme.apartments" className={styles.staffMail}>
        {staff.email}
      </a>
      <img className={styles.iconEdit} src={iconEdit} alt="icon Edit" />
      <img className={styles.iconDelete} src={iconDelete} alt="icon Delete" />
    </div>
  );
};

export default staffcard;
