import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AnyIfEmpty, useDispatch, useSelector } from 'react-redux';
import iconReverseKey from '../../../images/icon-bg-reverse.svg';
import iconRocket from '../../../images/icon-bg-rocket.svg';
import iconYellowKey from '../../../images/icon-bg-yellow-key.svg';
import iconRedKey from '../../../images/icon-bg-yellow-red.svg';
import iconClose from '../../../images/icon-close.svg';
import { getNotificationList } from '../../../redux/notification/actions/getNotification.action';
import { notifyVisitor } from '../../../redux/notification/actions/notifyVisitor.action';
import styles from './CustModal.module.css';

const CustModal = (props: any) => {
  const dispatch = useDispatch();
  const notificationList = useSelector((state: AnyIfEmpty<object>) => state?.notificationList?.data?.result?.templates);
  const notifyVisitorData = useSelector((state: AnyIfEmpty<object>) => state.notifyVisitor);

  const [notificationListArrayWithIcons, setNotificationListArrayWithIcons] = useState([]);
  const [messageId, setMessageId] = useState('');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const ICONS_ARRAY = [{ iconsName: iconRocket }, { iconsName: iconYellowKey }, { iconsName: iconRedKey }, { iconsName: iconReverseKey }, { iconsName: iconRedKey }];

  useEffect(() => {
    dispatch(getNotificationList());
  }, []);

  useEffect(() => {
    const data = notificationList && notificationList.map((data: Element, index: number) => ({ data, ...ICONS_ARRAY[index] }));

    setNotificationListArrayWithIcons(data);
  }, [notificationList]);

  function closeModal() {
    props.setOpen(false);
  }

  const radioButtonHandler = (id: string) => {
    setMessageId(id);
  };

  const sendNotificationHandler = () => {
    dispatch(notifyVisitor(messageId, '5f1a2e44-eb1f-4a06-af11-4ffe00a598e4'));
  };

  return (
    <div>
      <div>
        <Modal isOpen={props.open} onRequestClose={closeModal} style={customStyles} contentLabel='Modal'>
          <div className={styles.modalNotification}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>Notification</div>
              <span className={styles.close}>
                <img src={iconClose} onClick={closeModal} />
              </span>
            </div>
            <div className={styles.modalBody}>
              {notificationListArrayWithIcons &&
                notificationListArrayWithIcons?.map((data: AnyIfEmpty<object>) => (
                  <div key={data.data.id} className={styles.card}>
                    <div className={styles.icon}>
                      <img src={data?.iconsName} />
                    </div>
                    <div className={styles.content}>{data?.data?.body}</div>
                    <div onClick={() => radioButtonHandler(data.data.id)} className={styles.radioContainer}>
                      <input type='radio' name='radio' />
                    </div>
                  </div>
                ))}
            </div>
            <div className={styles.modalFooter}>
              <button onClick={closeModal} className={styles.cancelBtn}>
                Cancel
              </button>
              <button onClick={sendNotificationHandler} className={styles.sendBtn}>
                Send Notification
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CustModal;
