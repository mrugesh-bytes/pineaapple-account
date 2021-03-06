import React from 'react';
import styles from './Counter.module.css';
const Counter = ({ value, setValue }: any) => {
    const handleDecrement = () => {
        if (value === 0) {
            return;
        }
        setValue((prev: any) => prev - 1);
    };

    const handleIncrement = () => {
        setValue((prev: any) => prev + 1);
    };

    return (
        <div className={styles.counterWrapper}>
            <span className={`${styles.iconCounter} ${styles.decrement}`} onClick={handleDecrement}>
                -
            </span>
            <input required type="number" name="counter" value={value} placeholder="0" onChange={(e: any) => setValue(e.target.value)} />
            <span className={`${styles.iconCounter} ${styles.increment}`} onClick={handleIncrement}>
                +
            </span>
        </div>
    );
};

export default Counter;
