import React, { useState } from 'react';
import styles from './Unitscard.module.css';
import cardImg from '../../../images/units-card.png';
import iconEdit from '../../../images/icon-edit.svg';
import iconDelete from '../../../images/icon-delete.svg';
import iconFt from '../../../images/icon-ft.svg';
import iconBed from '../../../images/icon-bed.svg';
import iconBathtub from '../../../images/icon-bathtub.svg';
import { Link } from 'react-router-dom';
import Slider from '../../common/slider/Slider';
import CustModal from '../../common/custmodal/CustModal';
import RemoveUnits from '../removeunits/RemoveUnits';
import AddUnits from '../addunits/AddUnits';

export interface Iunitcards {
    unit: {
        accountId: string;
        baths: number;
        building: string;
        createdAt: string;
        endAt: string;
        floor: number;
        id: string;
        imageUrl: string;
        lat: number;
        lng: number;
        locationId: string;
        name: string;
        price: number;
        rooms: number;
        route: [string];
        size: number;
        startAt: string;
        status: boolean;
        updatedAt: string;
    };
}
const Unitscard = ({ unit }: Iunitcards) => {
    const [deletePopup, setDeletePopup] = useState(false);
    const [editModal, setEditModal] = useState(false);
    return (
        <>
            <CustModal
                open={deletePopup}
                setOpen={setDeletePopup}
                bodyData={<RemoveUnits setDeletePopup={setDeletePopup} unitId={unit.id} />}
            />

            <CustModal open={editModal} setOpen={setEditModal} bodyData={<AddUnits setOpen={setEditModal} unitData={unit} />} />

            <div className={styles.unitcardMain}>
                <div className={styles.unitcard}>
                    <div className={styles.cardBanner}>
                        <div className={styles.bannerMain}>
                            <Slider carouselBanner={unit.imageUrl ? unit.imageUrl : cardImg} price={unit?.price} />
                            <span className={styles.cost}>{`$ ${unit.price}`}</span>
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardTitle}>
                            <Link to={`/unitDetails/${unit.id}`}>{unit?.name}</Link>

                            <span>
                                <img onClick={() => setEditModal(true)} src={iconEdit} />
                                <img onClick={() => setDeletePopup(true)} src={iconDelete} />
                            </span>
                        </div>
                        <Link to={`/unitDetails/${unit.id}`}>
                            <p>
                                Gustavo Daniels{' '}
                                <span className={unit.status ? `${styles.active}` : `${styles.inactive}`}>
                                    {unit.status ? 'Active' : 'Inactive'}
                                </span>
                            </p>
                        </Link>
                        <div className={styles.cardFacilities}>
                            <div className={styles.facility}>
                                <img src={iconFt} />
                                <Link to={`/unitDetails/${unit.id}`}>
                                    <span>{`${unit.size} Ft`}</span>
                                </Link>
                            </div>
                            <div className={styles.facility}>
                                <img src={iconBed} />
                                <Link to={`/unitDetails/${unit.id}`}>
                                    <span>{`${unit.rooms} Beds`}</span>
                                </Link>
                            </div>
                            <div className={styles.facility}>
                                <img src={iconBathtub} />
                                <Link to={`/unitDetails/${unit.id}`}>
                                    <span>{`${unit.baths} Bath`}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Unitscard;
