import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { IoIosAperture } from "react-icons/io";

export default function DisplayAlarms(props) {
  const { toggle } = props;
  const [toggleAlarms1, setToggleAlarms1] = useState(false);
  const [toggleAlarms2, setToggleAlarms2] = useState(false);
  const [toggleAlarms3, setToggleAlarms3] = useState(false);
  const [toggleAlarms4, setToggleAlarms4] = useState(false);
  const [toggleAlarms5, setToggleAlarms5] = useState(false);
  const [toggleAlarms6, setToggleAlarms6] = useState(false);

  const alarm1Toggler = () => {
    toggleAlarms1 ? setToggleAlarms1(false) : setToggleAlarms1(true);
  };
  const alarm2Toggler = () => {
    toggleAlarms2 ? setToggleAlarms2(false) : setToggleAlarms2(true);
  };
  const alarm3Toggler = () => {
    toggleAlarms3 ? setToggleAlarms3(false) : setToggleAlarms3(true);
  };
  const alarm4Toggler = () => {
    toggleAlarms4 ? setToggleAlarms4(false) : setToggleAlarms4(true);
  };
  const alarm5Toggler = () => {
    toggleAlarms5 ? setToggleAlarms5(false) : setToggleAlarms5(true);
  };
  const alarm6Toggler = () => {
    toggleAlarms6 ? setToggleAlarms6(false) : setToggleAlarms6(true);
  };

  const alarms = [
    {
      id: 1,
      name: "Alarm 1",
      togggle: <Switch checked={toggleAlarms1} onClick={alarm1Toggler} />,
    },
    {
      id: 2,
      name: "Alarm 2",
      togggle: <Switch checked={toggleAlarms2} onClick={alarm2Toggler} />,
    },
    {
      id: 3,
      name: "Alarm 3",
      togggle: <Switch checked={toggleAlarms3} onClick={alarm3Toggler} />,
    },
    {
      id: 4,
      name: "Alarm 4",
      togggle: <Switch checked={toggleAlarms4} onClick={alarm4Toggler} />,
    },
    {
      id: 5,
      name: "Alarm 5",
      togggle: <Switch checked={toggleAlarms5} onClick={alarm5Toggler} />,
    },
    {
      id: 6,
      name: "Alarm 6",
      togggle: <Switch checked={toggleAlarms6} onClick={alarm6Toggler} />,
    },
  ];
  return (
    <div>
      {alarms.map((alarm) => {
        const { id, name, togggle } = alarm;
        return (
          <article key={id}>
            <h4 className="alarm-name">
              <IoIosAperture />
              <span>{name}</span>
              <span className="toggle">{togggle}</span>
            </h4>
          </article>
        );
      })}
    </div>
  );
}
