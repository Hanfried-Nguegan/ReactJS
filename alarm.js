import React, { useState } from "react";
import { Switch } from "antd";
import { IoIosAperture } from "react-icons/io";

export default function DisplayAlarms(props) {
  const { alarmState } = props;

  const alarms = [
    {
      id: 1,
      name: "Alarm 1",
      togggle: <Switch checked={alarmState} />,
    },
    {
      id: 2,
      name: "Alarm 2",
      togggle: <Switch checked={alarmState} />,
    },
    {
      id: 3,
      name: "Alarm 3",
      togggle: <Switch checked={alarmState} />,
    },
    {
      id: 4,
      name: "Alarm 4",
      togggle: <Switch checked={alarmState} />,
    },
    {
      id: 5,
      name: "Alarm 5",
      togggle: <Switch checked={alarmState} />,
    },
    {
      id: 6,
      name: "Alarm 6",
      togggle: <Switch checked={alarmState} />,
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
