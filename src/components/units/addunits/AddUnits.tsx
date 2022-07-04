import React, { useEffect, useState } from 'react';
import iconClose from '../../../images/icon-close.svg';
import Counter from '../../common/counter/Counter';
import Switch from '../../common/switch/Switch';
import styles from './AddUnits.module.css';
import iconUpload from '../../../images/icon-upload-unit.svg';
import previewImg from '../../../images/preview-img-add-unit.png';
import iconClosePreview from '../../../images/icon-close-preview.svg';

const AddUnits = ({ setOpen }: any) => {
    const [unitName, setUnitName] = useState('');
    const [unitSize, setUnitSize] = useState(0);
    const [bedSize, setBedSize] = useState(0);
    const [bathSize, setBathSize] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);
    const [unitStatus, setUnitStatus] = useState(true);
    const [uploadFiles, setUploadFiles]: any = useState([]);
    const [unitFiles, setUnitFiles]: any = useState({});

    useEffect(() => {
        setUploadFiles(Object.values(unitFiles));
    }, [unitFiles]);

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <div className={styles.modalAddStaff}>
            <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>Add Unit</div>
                <span className={styles.close}>
                    <img src={iconClose} onClick={closeModal} />
                </span>
            </div>
            <div className={styles.modalBody}>
                <div className={styles.fieldWrapper}>
                    <label>Name</label>
                    <input placeholder="Enter unit name" name="unit" />
                </div>
                <div className={styles.unitContainer}>
                    <div className={styles.unitWrapper}>
                        <label>Size (Ft)</label>
                        <Counter value={unitSize} setValue={setUnitSize} />
                    </div>
                    <div className={styles.unitWrapper}>
                        <label>Beds</label>
                        <Counter value={bedSize} setValue={setBedSize} />
                    </div>
                    <div className={styles.unitWrapper}>
                        <label>Baths</label>
                        <Counter value={bathSize} setValue={setBathSize} />
                    </div>
                    <div className={styles.unitWrapper}>
                        <label>Price ($)</label>
                        <input
                            className={styles.price}
                            type="number"
                            name="price"
                            placeholder="0"
                            value={unitPrice}
                            onChange={(e: any) => setUnitPrice(e.target.value.slice(0, 5))}
                        />
                    </div>
                    <div className={styles.unitWrapper}>
                        <label>Status</label>
                        <Switch value={unitStatus} setValue={setUnitStatus} />
                    </div>
                </div>
                <div className={styles.unitUploadContainer}>
                    <label>Unit Pictures</label>
                    <div className={styles.uploadWrapper}>
                        <input
                            type="file"
                            accept="image/jpeg, image/jpg, image/png,  image/webp"
                            onChange={(e: any) => setUnitFiles(e.target.files)}
                            multiple></input>
                        <div className={styles.iconUnitUpload}>
                            <img src={iconUpload} alt="Icon Upload" />
                        </div>
                        {!uploadFiles.length ? (
                            <p>Upload image from here</p>
                        ) : (
                            <div className={styles.previewImgContainer}>
                                {uploadFiles.map((file: any, index: any) => {
                                    return (
                                        <div className={styles.imgWrapper} key={index}>
                                            <img className={styles.previewImg} src={URL.createObjectURL(file)} alt="Preview Image" />
                                            <img className={styles.previewClose} src={iconClosePreview} alt="Close Icon" />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.btnUploadContainer}>
                    <button className={`${styles.btnUpload} ${styles.success}`}>Add Unit</button>
                </div>
            </div>
        </div>
    );
};

export default AddUnits;
