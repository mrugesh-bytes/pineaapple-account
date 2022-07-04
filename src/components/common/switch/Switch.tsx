import React from 'react';
import styles from './Switch.module.css';

const Switch = ({ value, setValue }: any) => {
    return (
        <div className={`${styles.switch_box} ${styles.box_1}`}>
            <input value={value} onClick={() => setValue(!value)} type="checkbox" className={styles.switch_1} />
        </div>
    );
};

export default Switch;
