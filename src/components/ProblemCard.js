import React from "react";

// Importing from material-ui
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

// Importing from styles
import { colors } from "../styles/ColorPalette";

const ProblemCard = () => {
  return (
    <Card
      style={{ backgroundColor: colors.mediumBackground, height: "90%" }}
      raised
    >
      <CardContent>
        <p>Problem Card</p>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Skip
        </Button>
        <Button size="small" color="primary">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProblemCard;
