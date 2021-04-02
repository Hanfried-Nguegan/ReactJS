import React, { useState } from "react";
import DisplayAlarms from "./alarm";
import { Switch } from "antd";

function ControlPanel() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
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
