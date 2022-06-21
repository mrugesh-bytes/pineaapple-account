import React, { useEffect } from 'react';
import { AnyIfEmpty, useDispatch, useSelector } from 'react-redux';
import { getUnits } from '../../redux/units/actions/units.action';
import styles from './index.module.css';
import Unitscard from './unitscard/Unitscard';

const index = () => {
  const unitsData = useSelector((state: AnyIfEmpty<object>) => state?.units?.data?.result?.units);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnits());
  }, []);

  return (
    <div className='outletConainer'>
      <div className={styles.unitsContainer}>
        <div className={styles.unitsHead}>
          <div className={styles.userGreet}>
            <p>Welcome Josue!</p>
            <h2>Units</h2>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.outline}>+ Add Unit</button>
            <button className={styles.btnGreen}>+ Add Location</button>
            <select>
              <option>park towne Place</option>
              <option>Place #2</option>
              <option>Place #3</option>
            </select>
          </div>
        </div>
        <div className={styles.unitcards}>
          {unitsData &&
            unitsData.map((unit: Element, index: number) => {
              return <Unitscard unit={unit} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default index;
