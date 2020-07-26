import React, { useEffect, useRef } from "react";

// Importing from material-ui
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Keyboard from "@material-ui/icons/Keyboard";
import Dot from "@material-ui/icons/FiberManualRecordOutlined";
import Functions from "@material-ui/icons/Functions";
import TextField from "@material-ui/core/TextField";

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
    fontSize: "12px",
    padding: "8px",
    marginRight: "15px",
  },

  divider: {
    borderColor: "#e0e0e0",
    borderWidth: "0.7px",
  },

  contentContainer: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
  },

  textnChart: {
    color: colors.paragraphColor,
    fontSize: "15px",
    width: "50%",
    wordSpacing: "0.5em",
    lineHeight: "1.6",
    textAlign: "justify",
  },

  ipBoxes: {
    width: "48%",
  },

  inputBoxes: {
    width: "50px",
    marginRight: "3px",
    marginTop: "80px",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },

  headerButton: {
    backgroundColor: colors.darkBackground,
    color: colors.subtleText,
    fontSize: "12px",
    padding: "8px",
  },

  cardButton: {
    color: colors.subtleText,
    borderColor: colors.borderColor,
  },
};

const ProblemCard = () => {
  const nameFirst = useRef(null);
  const nameSecond = useRef(null);
  const nameThird = useRef(null);
  const nameFourth = useRef(null);

  useEffect(() => {
    nameFirst.current.focus();
  }, []);

  const handleEnter = (event) => {
    console.log("Inside handleEnter");
    if (event.charCode === 13) {
      if (event.target.name === "first") {
        nameSecond.current.focus();
      } else if (event.target.name === "second") {
        nameThird.current.focus();
      } else if (event.target.name === "third") {
        nameFourth.current.focus();
      } else if (event.target.name === "fourth") {
      }
    }
  };
  return (
    <React.Fragment>
      <Card style={styles.mainCard} raised>
        <CardContent style={styles.cardContent}>
          <div style={styles.headerContainer}>
            <div>
              <Button
                size="small"
                style={styles.headerText}
                startIcon={
                  <Keyboard style={{ color: colors.headingTextColor }} />
                }
              >
                Arithmetic
              </Button>
              <Button
                size="small"
                style={styles.headerText}
                startIcon={<Dot style={{ color: colors.headingTextColor }} />}
              >
                Real Problems
              </Button>
            </div>
            <div>
              <Button
                size="small"
                style={styles.headerButton}
                startIcon={<Functions style={{ color: colors.borderColor }} />}
              >
                Formula
              </Button>
            </div>
          </div>
          <hr style={styles.divider} />
          <div style={styles.contentContainer}>
            <div style={styles.textnChart}>
              <div style={styles.textbox}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for will
                  uncover many web sites still in their infancy
                </p>
              </div>
              <div style={styles.chartbox}></div>
            </div>
            <div style={styles.ipBoxes}>
              <TextField
                id="first"
                name="first"
                defaultValue="1"
                variant="outlined"
                size="small"
                inputRef={nameFirst}
                onKeyPress={handleEnter}
                style={styles.inputBoxes}
              />
              <TextField
                id="second"
                name="second"
                defaultValue="."
                variant="outlined"
                size="small"
                inputRef={nameSecond}
                onKeyPress={handleEnter}
                style={styles.inputBoxes}
              />
              <TextField
                id="third"
                name="third"
                defaultValue="1"
                variant="outlined"
                size="small"
                inputRef={nameThird}
                onKeyPress={handleEnter}
                style={styles.inputBoxes}
              />
              <TextField
                id="fourth"
                name="fourth"
                defaultValue="4"
                variant="outlined"
                size="small"
                inputRef={nameFourth}
                onKeyPress={handleEnter}
                style={styles.inputBoxes}
              />
            </div>
          </div>
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
