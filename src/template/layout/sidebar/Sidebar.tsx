import React, { useContext, useEffect, useState } from 'react';
import styles from './Sidebar.module.css';
import logoSm from '../../../images/logo-sm.svg';
import iconApartment from '../../../images/icon-apartment.svg';
import iconLockers from '../../../images/icon-lockers.svg';
import iconStaff from '../../../images/icon-staff.svg';
import iconVisits from '../../../images/icon-visits.svg';
import iconSupports from '../../../images/icon-supports.svg';
import iconMedia from '../../../images/icon-media.svg';
import iconCog from '../../../images/icon-cog.svg';
import iconLocation from '../../../images/icon-location.svg';
import iconMap from '../../../images/icon-map.svg';
import iconLogout from '../../../images/icon-logout.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../../components/context/AppContect';

const sidebar = () => {
    const [path, setPath] = useState('');
    const appContext = useContext(AppContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location]);

    const handleLogout = () => {
        localStorage.clear();

        navigate('/');
    };

    return (
        <div className={styles.sidebar}>
            <ul>
                <li onClick={() => navigate('/units')} className={styles.logo}>
                    <img src={logoSm} alt="logo"></img>
                </li>
                <li
                    onClick={() => {
                        navigate('/units');
                    }}
                    className={path === '/units' || path === `/unitDetails/${id}` ? styles.active : ''}>
                    <span className={styles.tooltip}>Units</span>
                    <img src={iconApartment} alt="Apartment Icon" />
                </li>
                <li>
                    <img src={iconLockers} alt="Lockers Icon" />
                    <span className={styles.tooltip}>Lockers</span>
                </li>
                <li
                    onClick={() => {
                        navigate('/staff');
                    }}
                    className={path === '/staff' ? styles.active : ''}>
                    <img src={iconStaff} alt="Staff Icon" />
                    <span className={styles.tooltip}>Staff</span>
                </li>
                <li>
                    <img src={iconVisits} alt="Visits Icon" />
                    <span className={styles.tooltip}>Visits</span>
                </li>
                <li onClick={() => navigate('/support')} className={path === '/support' ? styles.active : ''}>
                    <img src={iconSupports} alt="Supports Icon" />
                    <span className={styles.tooltip}>Supports</span>
                </li>
                <li>
                    <img src={iconMedia} alt="Media Icon" />
                    <span className={styles.tooltip}>Media</span>
                </li>
                <li>
                    <img src={iconCog} alt="Cog Icon" />
                    <span className={styles.tooltip}>Settings</span>
                </li>
                <li>
                    <img src={iconLocation} alt="Location Icon" />
                    <span className={styles.tooltip}>Locations</span>
                </li>
                <li>
                    <img src={iconMap} alt="Map Icon" />
                    <span className={styles.tooltip}>Map</span>
                </li>
                <li className={styles.iconLogout} onClick={handleLogout}>
                    <img src={iconLogout} alt="Icon Logout" />
                    <span className={styles.tooltip}>Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default sidebar;
