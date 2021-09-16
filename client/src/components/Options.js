import { useState } from "react";
import styles from "../styles/Options.module.scss";
import Option from "./Option";

export default function Options() {
  const [tempo, setTempo] = useState(110);
  const [duration, setDuration] = useState(50);
  const [energy, setEnergy] = useState(75);

  const changeTempo = (event, newValue) => {
    setTempo(newValue);
  };

  const changeDuration = (event, newValue) => {
    setDuration(newValue);
  };

  const changeEnergy = (event, newValue) => {
    setEnergy(newValue);
  };

  const convertDurationToString = () => {
    const maxDuration = 10800; //3 hours in secs
    const minDuration = 0;
    const delta = maxDuration - minDuration;
    const totalSecs = (duration / 100) * delta;

    // Convert to h:mm:ss
    var date = new Date(null);
    date.setSeconds(totalSecs);

    return date.toISOString().substr(11, 5);
  };

  const durationString = convertDurationToString();

  return (
    <>
      <div className={styles.options}>
        <ul>
          <li>
            <Option
              title="Tempo"
              valueDisplayed={tempo}
              value={tempo}
              onChange={changeTempo}
            />
            <Option
              title="Duration"
              valueDisplayed={durationString}
              value={duration}
              onChange={changeDuration}
            />
            <Option
              title="Energy"
              valueDisplayed={energy}
              value={energy}
              onChange={changeEnergy}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
