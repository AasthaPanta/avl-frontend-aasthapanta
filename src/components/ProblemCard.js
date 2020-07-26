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
import styled from "styled-components";

// Importing Components
import ProblemChart from "./ProblemChart";

const SelectorBox = styled.div`
  margin-bottom: 20px;
  padding-left: 60px;
  display: flex;
  @media (max-width: 450px) {
    padding-left: 2px;
    justify-content: space-between;
  }
`;

const FilterButton = styled(Button)`
  && {
    border-radius: 20px;
    border-color: ${colors.subtleText};
    color: ${colors.borderColor};
    margin-right: 10px;
    font-size: 12px;
    @media (max-width: 450px) {
      font-size: 10px;
      padding: 7px;
    }
  }
`;

const MainCard = styled(Card)`
  && {
    background-color: ${colors.mediumBackground};
    height: 85%;
    padding: 30px 60px;
    @media (max-width: 450px) {
      padding: 5px 2px;
      height: 95%;
    }
  }
`;

const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

const HeaderButton = styled(Button)`
  && {
    color: ${({ dark }) =>
      dark ? colors.paragraphColor : colors.headingTextColor};
    font-size: 12px;
    padding: 8px;
    margin-right: 15px;
    background-color: ${({ dark }) =>
      dark ? colors.darkBackground : "transparent"};
    @media (max-width: 450px) {
      display: ${({ dark }) => (dark ? "none" : "")};
      font-size: 10px;
      padding: 5px;
    }
  }
`;

const HorizontalDivider = styled.hr`
  border-color: #e0e0e0;
  border-width: 0.7px;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const TextndChart = styled.div`
  color: ${colors.paragraphColor};
  font-size: 15px;
  width: 50%;
  word-spacing: 0.5em;
  line-height: 1.6;
  text-align: justify;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const ChartBox = styled.div`
  background-color: ${colors.darkBackground};
  padding: 10px;
`;

const InputBoxes = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    width: 100%;
    justify-content: center;
  }
`;

const TextBoxes = styled(TextField)`
  && {
    width: 50px;
    margin-right: 5px;
    margin-top: 80px;
    border: 1px solid ${colors.lightBackground};
    border-radius: 5px;
    @media (max-width: 450px) {
      margin-top: 40px;
      width: 60px;
    }
  }
`;

const CardButton = styled(Button)`
  color: ${colors.subtleText};
  border-color: ${colors.borderColor};
  border-radius: 20px;
`;

const styles = {
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

const ProblemCard = () => {
  // For Handling number entry box
  const nameFirst = useRef(null);
  const nameSecond = useRef(null);
  const nameThird = useRef(null);
  const nameFourth = useRef(null);

  useEffect(() => {
    //nameFirst.current.focus();
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
      <SelectorBox>
        <FilterButton
          aria-controls="topics-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="outlined"
          endIcon={<DropDown />}
        >
          Topics
        </FilterButton>
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

        <FilterButton
          aria-controls="type-menu"
          aria-haspopup="true"
          variant="outlined"
          endIcon={<DropDown />}
        >
          Types
        </FilterButton>

        <FilterButton
          aria-controls="filter-menu"
          aria-haspopup="true"
          variant="outlined"
          endIcon={<DropDown />}
        >
          More Filter
        </FilterButton>
      </SelectorBox>

      <MainCard raised>
        <CardContent style={styles.cardContent}>
          <CardHeaderContainer>
            <div>
              <HeaderButton
                size="small"
                startIcon={
                  <Keyboard style={{ color: colors.headingTextColor }} />
                }
              >
                Arithmetic
              </HeaderButton>
              <HeaderButton
                size="small"
                startIcon={<Dot style={{ color: colors.headingTextColor }} />}
              >
                Real Problems
              </HeaderButton>
            </div>
            <div>
              <HeaderButton
                dark
                size="small"
                startIcon={<Functions style={{ color: colors.borderColor }} />}
              >
                Formula
              </HeaderButton>
            </div>
          </CardHeaderContainer>
          <HorizontalDivider />
          <ContentContainer>
            <TextndChart>
              <div>
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
              <ChartBox>
                <ProblemChart />
              </ChartBox>
            </TextndChart>
            <InputBoxes>
              <TextBoxes
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
              />
              <TextBoxes
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
              />
              <TextBoxes
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
              />
              <TextBoxes
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
              />
            </InputBoxes>
          </ContentContainer>
        </CardContent>

        <CardActions style={styles.cardActions}>
          <CardButton size="small" variant="outlined">
            Skip
          </CardButton>
          <CardButton size="small" variant="outlined">
            Submit
          </CardButton>
        </CardActions>
      </MainCard>
    </React.Fragment>
  );
};

export default ProblemCard;
