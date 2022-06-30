import React, { useState } from 'react';
import styles from './AddStaff.module.css';
import iconClose from '../../../images/icon-close.svg';
import defaultProfilePic from '../../../images/default_profile_pic.png';
import uploadAvatar from '../../../images/upload-avatar.svg';
import Select from 'react-select';
import { addStaff, editStaff } from '../../../redux/staff/actions/staff.action';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import Toast from '../../common/toast/Toast';

const options = [
    { value: 'AdminRole', label: 'Admin' },
    { value: 'GenralManagerRole', label: 'General Manager' },
    { value: 'PropertyManagerRole', label: 'Property Manager' },
    { value: 'LeasingAgentRole', label: 'Leasing Agent' },
    { value: 'MaintenanceRole', label: 'Maintenance' },
];

const colourStyles = {
    option: (styles: any, { isFocused, isSelected }: any) => {
        return {
            ...styles,
            backgroundColor: isFocused ? '#E59236' : isSelected ? '#E59236' : null,
            color: isFocused ? '#fff ' : isSelected ? '#fff !important' : null,
            cursor: 'pointer',
        };
    },
};

const AddStaff = ({ staffData, setOpen }: any) => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption]: any = useState(
        staffData
            ? options.find((role) => role.value === staffData.role)
            : {
                  value: 'AdminRole',
                  label: 'Admin',
              },
    );

    const [name, setName] = useState(staffData?.name || '');
    const [email, setEmail] = useState(staffData?.email || '');
    const [password, setPassword] = useState('');
    const [files, setFiles]: any = useState({ name: '' });

    const closeModal = () => {
        setOpen(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        staffData
            ? dispatch(
                  editStaff({
                      id: staffData.id,
                      email,
                      name,
                      password: staffData ? '' : password,
                      photo: _.isEmpty(files.name) ? '' : files,
                      role: selectedOption.value,
                      imageUrl: _.isEmpty(files.name) ? staffData?.imageUrl : '',
                      deleteImageUrl: _.isEmpty(files.name) ? '' : staffData?.imageUrl,
                  }),
              )
            : dispatch(
                  addStaff({
                      email,
                      name,
                      password: staffData ? '' : password,
                      photo: files,
                      role: selectedOption.value,
                  }),
              );
        setOpen(false);
    };

    return (
        <div>
            <div className={styles.modalAddStaff}>
                <div className={styles.modalHeader}>
                    <div className={styles.modalTitle}>{staffData ? `Edit Staff` : `Add Staff`}</div>
                    <span className={styles.close}>
                        <img src={iconClose} onClick={closeModal} />
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.modalBody}>
                        <div className={styles.staffPhoto}>
                            <img
                                className={styles.staffAvatar}
                                src={
                                    !_.isEmpty(files.name)
                                        ? URL.createObjectURL(files)
                                        : staffData?.imageUrl
                                        ? staffData?.imageUrl
                                        : defaultProfilePic
                                }
                                alt="Add Staff"
                            />
                            <img className={styles.uploadAvatar} src={uploadAvatar} alt="Upload Avatar"></img>
                            <input type="file" name="upload-avatar" accept="image/*" onChange={(e: any) => setFiles(e.target.files[0])} />
                        </div>
                        <div className={styles.formStaff}>
                            <div className={styles.field}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    defaultValue={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>
                            <div className={`${styles.field} ${styles.select}`}>
                                <label>Select a Role</label>
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={(event: any) => setSelectedOption(event)}
                                    options={options}
                                    styles={colourStyles}
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Email Id</label>
                                <input type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.field}>
                                <label>Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.modalFooter}>
                            <button className={styles.sendBtn}>{staffData ? `Edit Staff` : `Add Staff`}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStaff;
