import React from "react";

// Importing from Material-UI
import Grid from "@material-ui/core/Grid";

// Importing Colors
import { colors } from "../styles/ColorPalette";

// Importing Components
import ProblemCard from "./ProblemCard";
import StatusView from "./StatusView";

const styles = {
  mainContainer: {},
  gridContainer: {
    height: "100%",
  },
  smallGrid: {
    backgroundColor: colors.darkBackground,
    padding: "20px",
  },
  bigGrid: {
    backgroundColor: colors.mediumBackground,
    padding: "20px",
    height: "100%",
  },
};

const Main = () => {
  return (
    <div style={styles.mainContainer}>
      <Grid container spacing={1} style={styles.gridContainer}>
        <Grid item md={3} lg={3} xs={12} sm={3} style={styles.smallGrid}>
          <StatusView />
        </Grid>
        <Grid item md={9} lg={9} xs={12} sm={9} style={styles.bigGrid}>
          <ProblemCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
