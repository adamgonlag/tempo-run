import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "../styles/Option.module.scss";

export default function Option({ title, valueDisplayed, value, onChange }) {
  let max = 100,
    min = 0;
  if (title === "Tempo") {
    valueDisplayed += "bpm";
    max = 200;
    min = 80;
  } else if (title === "Duration") {
    valueDisplayed += "hh:mm";
  }

  return (
    <div className={styles.option}>
      <h2>{title}</h2>
      <h1>{valueDisplayed}</h1>
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
