import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "../styles/components/Option.module.scss";

export default function Option({ title, valueDisplayed, value, onChange }) {
  let max = 100,
    min = 0;
  if (title === "Your Tempo") {
    valueDisplayed += "bpm";
    max = 200;
    min = 80;
  } else if (title === "Target Duration") {
    valueDisplayed += "hh:mm";
    max = 10800;
    min = 0;
  } else if (title === "Energy Profile") {
    max = 100;
    min = 0;
    valueDisplayed = valueDisplayed + "%";
  }

  return (
    <div className={styles.option}>
      <div className={styles.heading}>
        <label>{title}</label>
        <h1>{valueDisplayed}</h1>
      </div>
      <Box>
        <Slider
          aria-label={title}
          value={value}
          onChange={onChange}
          color="secondary"
          min={min}
          max={max}
        />
      </Box>
    </div>
  );
}
