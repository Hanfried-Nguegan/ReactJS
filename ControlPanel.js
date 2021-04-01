import React, { useState } from "react";
import DisplayAlarms from "./alarm";
import { Switch } from "antd";

function ControlPanel({
  setToggleAlarm1,
  setToggleAlarm2,
  setToggleAlarm3,
  setToggleAlarm4,
  setToggleAlarm5,
  setToggleAlarm6,
}) {
  const [toggle, setToggle] = useState(false);
  const [masterToggle, setMasterToggle] = useState(false);

  const masterToggler = () => {
    masterToggle ? setMasterToggle(false) : masterToggle(true);
  };

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
    if (toggle === true) {
      setToggleAlarm1(true) &&
        setToggleAlarm2(true) &&
        setToggleAlarm3(true) &&
        setToggleAlarm4(true) &&
        setToggleAlarm5(true) &&
        setToggleAlarm6(true);
    } else {
      setToggleAlarm1(false) &&
        setToggleAlarm2(false) &&
        setToggleAlarm3(false) &&
        setToggleAlarm4(false) &&
        setToggleAlarm5(false) &&
        setToggleAlarm6(false);
    }
  };
  return (
    <div className="controlpanel">
      <div className="alarm-toggles ">
        <div>
          <h4 className="master-control">
            Master Control{" "}
            <Switch
              checked={toggle}
              onClick={toggler}
              className="float-right pl-5"
            />
          </h4>
          <DisplayAlarms toggle={toggle} />
        </div>
      </div>
      <div className="alarm-devices">Alarm Devices</div>
    </div>
  );
}

export default ControlPanel;
