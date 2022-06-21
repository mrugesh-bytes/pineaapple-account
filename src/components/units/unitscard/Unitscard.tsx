import React, { useEffect, useState } from "react";
import styles from "./Unitscard.module.css";
import cardImg from "../../../images/units-card.png";
import iconEdit from "../../../images/icon-edit.svg";
import iconDelete from "../../../images/icon-delete.svg";
import iconFt from "../../../images/icon-ft.svg";
import iconBed from "../../../images/icon-bed.svg";
import iconBathtub from "../../../images/icon-bathtub.svg";
import iconKey from "../../../images/icon-key.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "../../common/slider/Slider";

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
  return (
    <div className={styles.unitcardMain}>
      <div className={styles.unitcard}>
        <div className={styles.cardBanner}>
          <div className={styles.bannerMain}>
            <Link to={`/unitDetails/${unit.id}`}>
              <Slider
                carouselBanner={unit.imageUrl ? unit.imageUrl : cardImg}
                price={unit?.price}
              />
              <span className={styles.cost}>{`$ ${unit.price}`}</span>
            </Link>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>
            {unit?.name}

            <span>
              <img src={iconEdit} />
              <img src={iconDelete} />
            </span>
          </div>
          <p>
            Gustavo Daniels <span>{unit.status ? "Active" : "Inactive"}</span>
          </p>
          <div className={styles.cardFacilities}>
            <div className={styles.facility}>
              <img src={iconFt} />
              <span>{`${unit.size} Ft`}</span>
            </div>
            <div className={styles.facility}>
              <img src={iconBed} />
              <span>{`${unit.rooms} Beds`}</span>
            </div>
            <div className={styles.facility}>
              <img src={iconBathtub} />
              <span>{`${unit.baths} Bath`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unitscard;
