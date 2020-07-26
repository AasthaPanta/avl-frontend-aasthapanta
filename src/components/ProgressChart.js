import React from "react";

// Importing from material-ui
import CircularProgress from "@material-ui/core/CircularProgress";

// Importing styles
import { colors } from "../styles/ColorPalette";

const styles = {
  mainContainer: {
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    left: "80px",
    top: "70px",
  },
  text: {
    color: colors.brightText,
    fontWeight: "700",
    fontSize: "30px",
    marginTop: "-10px",
  },
  chartContainer: {
    height: "220px",
    width: "220px",
    borderRadius: "100%",
    border: "1px solid #282c35",
  },
};

const ProgressChart = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.textContainer}>
        <p style={{ color: colors.paragraphColor }}>Accuracy</p>
        <p style={styles.text}>75%</p>
      </div>
      <div style={styles.chartContainer}>
        <CircularProgress
          variant="static"
          value={75}
          label="hello"
          size={220}
          thickness={1}
          style={{ color: " #2ec4b6" }}
        />
      </div>
    </div>
  );
};

export default ProgressChart;
