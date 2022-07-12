import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import iconClose from '../../../images/icon-close.svg';
import { deleteStaff } from '../../../redux/staff/actions/staff.action';
import styles from './RemoveStaff.module.css';
const RemoveStaff = ({ setDeletePopup, staffId }: any) => {
    const closeModal = () => {
        setDeletePopup(false);
    };

    const dispatch = useDispatch();

    const deleteStaffHandler = () => {
        dispatch(deleteStaff(staffId));
    };

    return (
        <div className={styles.modalRemoveStaff}>
            <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>Delete Staff</div>
                <span className={styles.close}>
                    <img src={iconClose} onClick={closeModal} />
                </span>
            </div>
            <div className={styles.modalBody}>
                <h2 className={styles.modalBodyTitle}>Are you sure want to delete?</h2>
                <p className={styles.modalBodyInfo}>Once you delete the account, you will not be able to recover the account again!</p>
            </div>
            <div className={styles.modalFooter}>
                <button onClick={closeModal} className={`${styles.Modalbtn} ${styles.cancelBtn}`}>
                    Cancel
                </button>
                <button onClick={deleteStaffHandler} className={`${styles.Modalbtn} ${styles.deleteBtn}`}>
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default RemoveStaff;
