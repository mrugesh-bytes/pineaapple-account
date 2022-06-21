import React, { useState } from "react";
import styles from "../template/outerlayout/outerlayout.module.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "admin", label: "Admin" },
  { value: "general manager", label: "General Manager" },
  { value: "property manager", label: "Property Manager" },
  { value: "leasing agent", label: "Leasing Agent" },
  { value: "maintenence", label: "Maintenence" },
];

function Onboarding() {
  const [selectedOption, setSelectedOption]: any = useState({
    value: "admin",
    label: "Admin",
  });
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    localStorage.setItem("type", event.label);
    navigate("/login");
  };

  const userType = localStorage.getItem("type");

  return (
    <form>
      <div className={styles.fieldWrapper}>
        <div>
          <label>Hi! I’m A</label>
        </div>
        <div className={styles.field}>
          <Select
            placeholder="Select a role"
            // defaultValue={selectedOption}
            onChange={handleChange}
            options={options}
            className={styles.customSelect}
          />
        </div>
      </div>
    </form>
  );
}

export default Onboarding;
