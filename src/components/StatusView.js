import React from "react";

import ProgressChart from "./ProgressChart";

// Importing styles
import { colors } from "../styles/ColorPalette";

const styles = {
  mainBox: {
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  chartBox: {
    height: "250px",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  textBox: {
    height: "150px",
  },
  pText: {
    color: colors.paragraphColor,
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "300",
  },
  spanText: {
    color: colors.brightText,
    fontWeight: "700",
    fontSize: "30px",
    marginRight: "5px",
  },
};

const StatusView = () => {
  return (
    <div style={styles.mainBox}>
      <div style={styles.chartBox}>
        <ProgressChart />
      </div>
      <div style={styles.textBox}>
        <p style={styles.pText}>Completed</p>
        <p style={styles.pText}>
          <span style={styles.spanText}>100</span>problems
        </p>
      </div>
      <div style={{ ...styles.textBox, marginTop: "-50px" }}>
        <p style={styles.pText}>Correct</p>
        <p style={styles.pText}>
          <span style={styles.spanText}>75</span>problems
        </p>
      </div>
    </div>
  );
};

export default StatusView;
