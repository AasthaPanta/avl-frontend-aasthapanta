import React, { useEffect, useRef } from "react";

// Importing from material-ui
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Importing icons
import Keyboard from "@material-ui/icons/Keyboard";
import Dot from "@material-ui/icons/FiberManualRecordOutlined";
import Functions from "@material-ui/icons/Functions";
import DropDown from "@material-ui/icons/ArrowDropDown";

// Importing from styles
import { colors } from "../styles/ColorPalette";

// Importing Components
import ProblemChart from "./ProblemChart";

const styles = {
  selectorBox: {
    marginBottom: "20px",
    paddingLeft: "60px",
    display: "flex",
  },

  filterButton: {
    borderRadius: "20px",
    borderColor: colors.subtleText,
    color: colors.borderColor,
    marginRight: "10px",
    fontSize: "12px",
  },

  mainCard: {
    backgroundColor: colors.mediumBackground,
    height: "85%",
    padding: "30px 60px",
  },

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  inputBoxes: {
    width: "50px",
    marginRight: "5px",
    marginTop: "80px",
    border: "1px solid #2ec4b6",
    borderRadius: "5px",
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
    borderRadius: "20px",
  },

  cardButton: {
    color: colors.subtleText,
    borderColor: colors.borderColor,
    borderRadius: "20px",
  },
};

const ProblemCard = () => {
  // For Handling number entry box
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
        nameFirst.current.focus();
      }
    }
  };

  const [anchorEl, setAnchorEl] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl("");
  };

  return (
    <React.Fragment>
      <div style={styles.selectorBox}>
        <Button
          aria-controls="topics-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="outlined"
          style={styles.filterButton}
          endIcon={<DropDown />}
        >
          Topics
        </Button>
        <Menu
          id="topics-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Arithmetic</MenuItem>
          <MenuItem onClick={handleClose}>Algebra</MenuItem>
          <MenuItem onClick={handleClose}>Geometry</MenuItem>
          <MenuItem onClick={handleClose}>Trigonometry</MenuItem>
        </Menu>

        <Button
          aria-controls="type-menu"
          aria-haspopup="true"
          variant="outlined"
          style={styles.filterButton}
          endIcon={<DropDown />}
        >
          Types
        </Button>
        <Menu
          id="type-menu"
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleClose}>Popular</MenuItem>
          <MenuItem onClick={handleClose}>New</MenuItem>
          <MenuItem onClick={handleClose}>Old</MenuItem>
        </Menu>

        <Button
          aria-controls="filter-menu"
          aria-haspopup="true"
          style={styles.filterButton}
          variant="outlined"
          endIcon={<DropDown />}
        >
          More Filter
        </Button>
        <Menu
          id="filter-menu"
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
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
              <div style={styles.chartbox}>
                <ProblemChart />
              </div>
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
                InputProps={{
                  style: { color: colors.subtleText },
                }}
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
                InputProps={{
                  style: { color: colors.subtleText },
                }}
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
                InputProps={{
                  style: { color: colors.subtleText },
                }}
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
                InputProps={{
                  style: { color: colors.subtleText },
                }}
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
