import React, { useState } from 'react';
import styles from '../template/outerlayout/outerlayout.module.css';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../constants/constants';

function Onboarding() {
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        localStorage.setItem('type', event.value);
        navigate('/login');
    };

    return (
        <form className={styles.welcomeForm}>
            <div className={styles.fieldWrapper}>
                <div>
                    <label>Hi! I’m A</label>
                </div>
                <div className={styles.field}>
                    <Select placeholder="Select a role" onChange={handleChange} options={Roles} className={styles.customSelect} />
                </div>
            </div>
        </form>
    );
}

export default Onboarding;
