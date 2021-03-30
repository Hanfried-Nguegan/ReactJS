import React, { useState, useEffect } from "react";
import DisplayAlarms from "./alarm";
import { Switch } from "antd";

function ControlPanel() {
  const [toggle, setToggle] = useState(false);
  const [masterToggle, setMasterToggle] = useState(false);
  const masterToggler = () => {
    masterToggle ? setMasterToggle(false) : masterToggle(true);
  };

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const turnOffAlarms = () => {
    masterToggle == false && setToggle(false);
  };

  return (
    <div className="controlpanel">
      <div className="alarm-toggles ">
        <div>
          <h4 className="master-control">
            Master Control{" "}
            <Switch
              checked={masterToggle}
              onClick={turnOffAlarms}
              className="float-right pl-5"
            />
          </h4>
          <DisplayAlarms alarmState={toggle} />
        </div>
      </div>
      <div className="alarm-devices">Alarm Devices</div>
    </div>
  );
}

export default ControlPanel;
