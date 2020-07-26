import React from "react";

// Importing from material-ui
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

// Importing from styles
import { colors } from "../styles/ColorPalette";

const styles = {
  mainCard: {
    backgroundColor: colors.mediumBackground,
    height: "80%",
    padding: "30px 60px",
  },
  cardContent: {},

  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  headerText: {
    color: colors.headingTextColor,
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "15px",
  },

  divider: {
    borderColor: "#e0e0e0",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  cardButton: {
    color: colors.subtleText,
    borderColor: colors.borderColor,
  },
};

const ProblemCard = () => {
  return (
    <React.Fragment>
      <Card style={styles.mainCard} raised>
        <CardContent style={styles.cardContent}>
          <div style={styles.headerContainer}>
            <div>
              <span style={styles.headerText}>Arithmetic</span>
              <span style={styles.headerText}>Real Problem</span>
            </div>
            <div>
              <p>Formula</p>
            </div>
          </div>
          <hr style={styles.divider} />
        </CardContent>
        <CardActions style={styles.cardActions}>
          <Button size="small" variant="outlined" style={styles.cardButton}>
            Skip
          </Button>
          <Button size="small" variant="outlined" style={styles.cardButton}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default ProblemCard;
