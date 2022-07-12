import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './AddLocation.module.css';
import iconClose from '../../../images/icon-close.svg';

const AddLocation = ({ setOpen }: any) => {
    const [rows, setRows] = useState([]);

    const closeModal = () => {
        setOpen(false);
    };
    return (
        <div className={styles.modalLocation}>
            <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>Add Location</div>
                <span className={styles.close}>
                    <img src={iconClose} onClick={closeModal} />
                </span>
            </div>
            <div className={styles.modalBody}>
                <div className={styles.searchWrapper}>
                    <span className={styles.locationTitle}>Loaction</span>
                </div>
                <div className={styles.modalFooter}>
                    <button className={styles.submit}>Add Location</button>
                </div>
            </div>
        </div>
    );
};

export default AddLocation;
