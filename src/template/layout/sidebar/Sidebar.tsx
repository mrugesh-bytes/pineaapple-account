import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import logoSm from "../../../images/logo-sm.svg";
import iconApartment from "../../../images/icon-apartment.svg";
import iconLockers from "../../../images/icon-lockers.svg";
import iconStaff from "../../../images/icon-staff.svg";
import iconVisits from "../../../images/icon-visits.svg";
import iconSupports from "../../../images/icon-supports.svg";
import iconMedia from "../../../images/icon-media.svg";
import iconCog from "../../../images/icon-cog.svg";
import iconLocation from "../../../images/icon-location.svg";
import iconMap from "../../../images/icon-map.svg";
import iconLogout from "../../../images/icon-logout.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const sidebar = () => {
  const [path, setPath] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        <li onClick={() => navigate("/")} className={styles.logo}>
          <img src={logoSm} alt="logo"></img>
        </li>
        <li
          onClick={() => {
            navigate("/units");
          }}
          className={
            path === "/units" || path === `/unitDetails/${id}`
              ? styles.active
              : ""
          }
        >
          <img src={iconApartment} alt="Apartment Icon" />
        </li>
        <li>
          <img src={iconLockers} alt="Lockers Icon" />
        </li>
        <li>
          <img src={iconStaff} alt="Staff Icon" />
        </li>
        <li>
          <img src={iconVisits} alt="Visits Icon" />
        </li>
        <li
          onClick={() => navigate("/support")}
          className={path === "/support" ? styles.active : ""}
        >
          <img src={iconSupports} alt="Supports Icon" />
        </li>
        <li>
          <img src={iconMedia} alt="Media Icon" />
        </li>
        <li>
          <img src={iconCog} alt="Cog Icon" />
        </li>
        <li>
          <img src={iconLocation} alt="Location Icon" />
        </li>
        <li>
          <img src={iconMap} alt="Map Icon" />
        </li>
        <li className={styles.iconLogout} onClick={handleLogout}>
          <img src={iconLogout} alt="Icon Logout" />
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
