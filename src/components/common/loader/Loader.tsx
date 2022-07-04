import React from 'react';
import styles from './Loader.module.css';
import loaderImg from '../../../images/output-onlinegiftools.gif';
const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <img src={loaderImg} />
        </div>
    );
};

export default Loader;
