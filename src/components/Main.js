import React from "react";

// Importing from Material-UI
import Grid from "@material-ui/core/Grid";

// Importing Colors
import { colors } from "../styles/ColorPalette";

// Importing Components
import ProblemCard from "./ProblemCard";

const styles = {
  mainContainer: {
    height: "100vh",
  },
  gridContainer: {
    height: "100%",
  },
  smallGrid: {
    backgroundColor: colors.darkBackground,
  },
  bigGrid: {
    backgroundColor: colors.mediumBackground,
    padding: "40px",
  },
};

const Main = () => {
  return (
    <div style={styles.mainContainer}>
      <Grid container spacing={1} style={styles.gridContainer}>
        <Grid item md={3} lg={3} xs={12} sm={12} style={styles.smallGrid}>
          <div> I am small div</div>
        </Grid>
        <Grid item md={9} lg={9} xs={12} sm={12} style={styles.bigGrid}>
          <ProblemCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
