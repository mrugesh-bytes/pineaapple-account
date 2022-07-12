import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import iconRocket from '../../../images/icon-bg-rocket.svg';
import iconYellowKey from '../../../images/icon-bg-yellow-key.svg';
import iconRedKey from '../../../images/icon-bg-yellow-red.svg';
import iconReverseKey from '../../../images/icon-bg-reverse.svg';

interface ICustModal {
    open: boolean;
    setOpen: any;
}

const CustModal = (props: any) => {
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

    const ICONS_ARRAY = [
        { iconsName: iconRocket },
        { iconsName: iconYellowKey },
        { iconsName: iconRedKey },
        { iconsName: iconReverseKey },
        { iconsName: iconRedKey },
    ];

    function closeModal() {
        props.setOpen(false);
    }

    return (
        <Modal isOpen={props.open} onRequestClose={closeModal} style={customStyles} contentLabel="Modal">
            {props.bodyData}
        </Modal>
    );
};

export default CustModal;
