import React, { useState, useEffect } from "react";
import DisplayAlarms from "./alarm";
import { Switch } from "antd";

function ControlPanel(props) {
  const {
    setToggleAlarms1,
    setToggleAlarms2,
    setToggleAlarms3,
    setToggleAlarms4,
    setToggleAlarms5,
    setToggleAlarms6,
  } = props;
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  useEffect(() => {
    if (toggle === true) {
      setToggleAlarms1(true) &&
        setToggleAlarms2(true) &&
        setToggleAlarms3(true) &&
        setToggleAlarms4(true) &&
        setToggleAlarms5(true) &&
        setToggleAlarms6(true);
    } else {
      setToggleAlarms1(false) &&
        setToggleAlarms2(false) &&
        setToggleAlarms3(false) &&
        setToggleAlarms4(false) &&
        setToggleAlarms5(false) &&
        setToggleAlarms6(false);
    }
  }, [toggle]);

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
