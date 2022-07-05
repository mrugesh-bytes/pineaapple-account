import React from 'react';
import styles from './RemoveUnits.module.css';
import iconClose from '../../../images/icon-close.svg';
import { useDispatch } from 'react-redux';
import { deleteUnits } from '../../../redux/units/actions/units.action';

const RemoveUnits = ({ setDeletePopup, unitId }: any) => {
    const closeModal = () => {
        setDeletePopup(false);
    };
    const dispatch = useDispatch();

    const deleteStaffHandler = () => {
        dispatch(deleteUnits(unitId));
    };
    return (
        <div>
            <div>
                <div className={styles.modalRemoveStaff}>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalTitle}>Delete Unit</div>
                        <span className={styles.close}>
                            <img src={iconClose} onClick={closeModal} />
                        </span>
                    </div>
                    <div className={styles.modalBody}>
                        <h2 className={styles.modalBodyTitle}>Are you sure want to delete?</h2>
                        <p className={styles.modalBodyInfo}>Once you delete the unit, you will not be able to recover the unit again!</p>
                    </div>
                    <div className={styles.modalFooter}>
                        <button onClick={closeModal} className={`${styles.Modalbtn} ${styles.cancelBtn}`}>
                            Cancel
                        </button>
                        <button onClick={deleteStaffHandler} className={`${styles.Modalbtn} ${styles.deleteBtn}`}>
                            Delete Unit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveUnits;
