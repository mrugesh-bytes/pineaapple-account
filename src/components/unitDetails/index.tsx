import React, { useEffect, useState } from "react";
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import iconActionMsg from "../../../src/images//icon-action-message.svg";
import iconActionBell from "../../../src/images/icon-action-bell.svg";
import iconBathtub from "../../../src/images/icon-bathtub.svg";
import iconBed from "../../../src/images/icon-bed.svg";
import iconBack from "../../../src/images/icon-chevron-left.svg";
import iconDelete from "../../../src/images/icon-delete.svg";
import iconEdit from "../../../src/images/icon-edit.svg";
import iconFt from "../../../src/images/icon-ft.svg";
import { getUnitById } from "../../redux/units/actions/unitById.action";
import CustModal from "../common/custmodal/CustModal";
import Slider from "../common/slider/Slider";
import Map from "../map/Map";
import styles from "./index.module.css";
import UnitNotification from "./UnitNotification";

const UnitDetails = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const unitByIdData = useSelector((state: AnyIfEmpty<object>) => state?.unitById?.data?.result?.unit);

  useEffect(() => {
    dispatch(getUnitById(id));
  }, []);

  return (
    <>
      <CustModal
        open={open}
        setOpen={setOpen}
        bodyData={<UnitNotification setOpen={setOpen} />}
      />
      <div className={styles.outletConainer}>
        <div className={styles.flexWrapper}>
          <div className={styles.unitDetails}>
            <div className={styles.flexContainer}>
              <div className={styles.cartDetailsHeader}>
                <div
                  className={styles.cartDetailsBack}
                  onClick={() => navigate("/units")}
                >
                  <img src={iconBack} />
                </div>
                <div>
                  <h2 className={styles.cartDetailsPlace}>Park Towne Place</h2>
                  <p>
                    Gustavo Daniels <span>Active</span>
                  </p>
                </div>
              </div>
              <div className={styles.unitDetailsAction}>
                <div className={styles.iconedit}>
                  <img src={iconEdit} alt="Edit" />
                </div>
                <div className={styles.icondelete}>
                  <img src={iconDelete} alt="Delete" />
                </div>
              </div>
            </div>
            <Slider
              carouselBanner={unitByIdData?.imageUrl}
              price={unitByIdData?.price}
            />
            <div className={styles.facilities}>
              <div className={styles.facility}>
                <div className={styles.facilityicon}>
                  <img src={iconFt} alt="Ft" />
                </div>
                <div className={styles.facilityName}>80 ft</div>
              </div>
              <div className={styles.facility}>
                <div className={styles.facilityicon}>
                  <img src={iconBed} alt="Beds" />
                </div>
                <div className={styles.facilityName}>2 Beds</div>
              </div>
              <div className={styles.facility}>
                <div className={styles.facilityicon}>
                  <img src={iconBathtub} alt="Bathtubs" />
                </div>
                <div className={styles.facilityName}>1 Bath</div>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.btnGreen}>Active Visit</button>
              <button className={styles.btnOutlineBlack}>Recent Visit</button>
            </div>
            <div className={styles.tableContainer}>
              <table>
                <tr>
                  <th>Date</th>
                  <th>Username</th>
                  <th>Time in</th>
                  <th>Time Out</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>30th May, 2022</td>
                  <td>Gustavo Daniels</td>
                  <td>13:00</td>
                  <td>13:45</td>
                  <td>
                    <img
                      onClick={() => setOpen(true)}
                      src={iconActionBell}
                      alt="Bell"
                    />
                    <img
                      onClick={() => navigate("/support")}
                      src={iconActionMsg}
                      alt="Message"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.unitsMap}>
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default UnitDetails;
