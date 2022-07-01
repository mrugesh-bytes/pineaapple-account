import React, { useEffect, useState } from "react";
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
import { getUnits } from "../../redux/units/actions/units.action";
import styles from "./index.module.css";
import Unitscard from "./unitscard/Unitscard";
import UserName from "../common/user/UserName";
import CustModal from "../common/custmodal/CustModal";
import CompleteProfile from "../staff/completeprofile/CompleteProfile";
import Switch from "../common/switch/Switch";
import Counter from "../common/counter/Counter";
import AddUnits from "./addunits/AddUnits";
import AddLocation from "./addlocation/AddLocation";

const index = () => {
	const dispatch = useDispatch();
	const unitsData = useSelector(
		(state: AnyIfEmpty<object>) => state?.units?.data?.result?.units
	);

	const [complete, setComplete] = useState(false);
	const [addunit, setAddUnit] = useState(false);
	const [addLocation, setAddLocation] = useState(false);

	useEffect(() => {
		dispatch(getUnits());
	}, []);

	return (
		<div className="outletConainer">
			<CustModal
				open={complete}
				setOpen={setComplete}
				bodyData={<CompleteProfile setOpen={setComplete} />}
			/>
			<CustModal
				open={addunit}
				setOpen={setAddUnit}
				bodyData={<AddUnits setOpen={setAddUnit} />}
			/>
			<CustModal
				open={addLocation}
				setOpen={setAddLocation}
				bodyData={<AddLocation setOpen={setAddLocation} />}
			/>
			<div className={styles.unitsContainer}>
				<div className={styles.unitsHead}>
					<div className={styles.userGreet}>
						<p>
							Welcome <UserName />
						</p>
						<h2>Units</h2>
					</div>
					<div className={styles.btnContainer}>
						<button
							className={styles.outline}
							onClick={() => setAddUnit(true)}
						>
							+ Add Unit
						</button>
						<button
							className={styles.btnGreen}
							onClick={() => setAddLocation(true)}
						>
							+ Add Location
						</button>
						<select>
							<option>park towne Place</option>
							<option>Place #2</option>
							<option>Place #3</option>
						</select>
					</div>
				</div>
				<div className={styles.unitcards}>
					{unitsData &&
						unitsData.map((unit: any, index: number) => {
							return <Unitscard unit={unit} key={index} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default index;
