import React, { useState } from 'react';
import styles from './staffcard.module.css';
import iconEdit from '../../../images/icon-edit.svg';
import iconDelete from '../../../images/icon-delete.svg';
import { Roles } from '../../../constants/staffRole';
import RemoveStaff from '../removestaff/RemoveStaff';
import CustModal from '../../common/custmodal/CustModal';
import AddStaff from '../addstaff/AddStaff';
import defaultProfilePic from '../../../images/default_profile_pic.png';

const backGC: any = {
    AdminRole: styles.staffAdmin,
    GenralManagerRole: styles.staffGeneral,
    PropertyManagerRole: styles.staffProperty,
    LeasingAgentRole: styles.staffLeasing,
    MaintenanceRole: styles.staffMaintenance,
};

const staffcard = ({ staff }: any) => {
    const [deletePopup, setDeletePopup] = useState(false);
    const [editModal, setEditModal] = useState(false);

    return (
        <>
            <CustModal
                open={deletePopup}
                setOpen={setDeletePopup}
                bodyData={<RemoveStaff setDeletePopup={setDeletePopup} staffId={staff.id} />}
            />
            <CustModal open={editModal} setOpen={setEditModal} bodyData={<AddStaff staffData={staff} setOpen={setEditModal} />} />
            <div className={styles.staffCard}>
                <div className={styles.staffPhotoContainer}>
                    <img src={staff.imageUrl || defaultProfilePic} alt="Staff Image" />
                    <p className={`${styles.staffPos} ${backGC[staff.role]}`}>
                        {Roles.find((role: any) => role.value == [staff.role]).label}
                    </p>
                </div>
                <h2 className={styles.staffName}>{staff.name}</h2>
                <a href={`mailto:${staff.email}`} className={styles.staffMail}>
                    {staff.email}
                </a>
                <img className={styles.iconEdit} src={iconEdit} alt="icon Edit" onClick={() => setEditModal(true)} />
                <img onClick={() => setDeletePopup(true)} className={styles.iconDelete} src={iconDelete} alt="icon Delete" />
            </div>
        </>
    );
};

export default staffcard;
