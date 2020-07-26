import React from "react";

// Importing from Material-UI
import Grid from "@material-ui/core/Grid";

const Main = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Grid container spacing={1} style={{ height: "100%" }}>
        <Grid item xs={4} style={{ backgroundColor: "pink" }}>
          <div> I am small div</div>
        </Grid>
        <Grid item xs={8} style={{ backgroundColor: "red" }}>
          <div>I am big div</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
