import React from 'react';
import styles from './Welcome.module.css';
const Welcome = () => {
    return (
        <div className={styles.field}>
            <select>
                <option>Admin</option>
                <option>General Manager</option>
                <option>Property Manager</option>
                <option>Leasing Agent</option>
                <option>Maintenence</option>
            </select>
        </div>
    );
};

export default Welcome;
