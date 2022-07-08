import React, { useEffect, useState } from 'react';
import iconClose from '../../../images/icon-close.svg';
import Counter from '../../common/counter/Counter';
import Switch from '../../common/switch/Switch';
import styles from './AddUnits.module.css';
import iconUpload from '../../../images/icon-upload-unit.svg';
import iconClosePreview from '../../../images/icon-close-preview.svg';
import { useDispatch } from 'react-redux';
import { addUnits, editUnits } from '../../../redux/units/actions/units.action';

const AddUnits = ({ unitData, setOpen }: any) => {
    const [unitName, setUnitName] = useState(unitData?.name || '');
    const [unitSize, setUnitSize] = useState(unitData?.size || '');
    const [bedSize, setBedSize] = useState(unitData?.rooms || '');
    const [bathSize, setBathSize] = useState(unitData?.baths || '');
    const [unitPrice, setUnitPrice] = useState(unitData?.price || '');
    const [unitStatus, setUnitStatus] = useState(unitData?.status || true);
    const [deletedImageUrl, setDeletedImageUrl]: any = useState([]);
    const [existingImages, setExistingImages]: any = useState([]);
    const [uploadFiles, setUploadFiles]: any = useState([]);
    const [unitFiles, setUnitFiles]: any = useState({});
    const dispatch = useDispatch();

    console.log(uploadFiles);

    useEffect(() => {
        if (unitData?.imageUrl) {
            setExistingImages(unitData.imageUrl.split(','));
        }
    }, []);
    useEffect(() => {
        setUploadFiles([...uploadFiles, ...Object.values(unitFiles)]);
    }, [unitFiles]);

    const closeModal = () => {
        setOpen(false);
    };

    const handleRemovePreview = (fileIndex: number) => {
        const remainingImages = uploadFiles.filter((item: any, index: number) => index != fileIndex);
        setUploadFiles(remainingImages);
    };

    const handleDeleteExistingImage = (fileIndex: number) => {
        setDeletedImageUrl([...deletedImageUrl, existingImages[fileIndex]]);
        const remainingImages = existingImages.splice(fileIndex, 1);
        console.log(remainingImages);
        console.log(existingImages);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        unitData
            ? dispatch(
                  editUnits({
                      id: unitData.id,
                      unitName: unitName,
                      bathSize: bathSize,
                      uploadFiles: uploadFiles,
                      unitPrice: unitPrice,
                      bedSize: bedSize,
                      unitSize: unitSize,
                      unitStatus: unitStatus,
                      imageUrl: existingImages.join(','),
                      deleteImageUrls: deletedImageUrl.join(','),
                  }),
              )
            : dispatch(
                  addUnits({
                      unitName,
                      bathSize,
                      uploadFiles,
                      unitPrice,
                      bedSize,
                      unitSize,
                      unitStatus,
                  }),
              );
        setOpen(false);
    };

    return (
        <div className={styles.modalAddStaff}>
            <form onSubmit={handleSubmit}>
                <div className={styles.modalHeader}>
                    <div className={styles.modalTitle}>{unitData ? `Edit Unit` : `Add Unit`}</div>
                    <span className={styles.close}>
                        <img src={iconClose} onClick={closeModal} />
                    </span>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.fieldWrapper}>
                        <label>Name</label>
                        <input
                            placeholder="Enter unit name"
                            name="unit"
                            value={unitName}
                            onChange={(e: any) => setUnitName(e.target.value)}
                            required
                        />
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
                                required
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
                            {!uploadFiles.length && !existingImages.length && <p>Upload image from here</p>}
                            {existingImages.length > 0 && (
                                <div className={styles.previewImgContainer}>
                                    {existingImages.length > 0 &&
                                        existingImages.map((image: any, index: any) => {
                                            return (
                                                <div className={styles.imgWrapper} key={index}>
                                                    <img className={styles.previewImg} src={image} alt="Preview Image" />
                                                    <img
                                                        className={styles.previewClose}
                                                        onClick={() => handleDeleteExistingImage(index)}
                                                        src={iconClosePreview}
                                                        alt="Close Icon"
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                            )}

                            {uploadFiles.length > 0 && (
                                <div className={styles.previewImgContainer}>
                                    {uploadFiles.map((file: any, index: any) => {
                                        return (
                                            <div className={styles.imgWrapper} key={index}>
                                                <img className={styles.previewImg} src={URL.createObjectURL(file)} alt="Preview Image" />
                                                <img
                                                    className={styles.previewClose}
                                                    onClick={() => handleRemovePreview(index)}
                                                    src={iconClosePreview}
                                                    alt="Close Icon"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.btnUploadContainer}>
                        <button type="submit" className={`${styles.btnUpload} ${styles.success}`}>
                            {unitData ? `Edit Unit` : `Add Unit`}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUnits;
