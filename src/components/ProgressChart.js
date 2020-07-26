import React from "react";

// Importing from material-ui
import CircularProgress from "@material-ui/core/CircularProgress";

// Importing styles
import { colors } from "../styles/ColorPalette";

import styled from "styled-components";

const ChartContainer = styled.div`
  height: 220px;
  width: 220px;
  border-radius: 100%;
  border: 1px solid #282c35;
  @media (max-width: 450px) {
    height: 130px;
    width: 130px;
  }
`;

const MainContainer = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 80px;
  top: 70px;
  @media (max-width: 450px) {
    top: 30px;
    left: 35px;
  }
`;

const Text = styled.p`
  color: ${colors.brightText};
  font-weight: 700;
  font-size: 30px;
  margin-top: -10px;
  @media (max-width: 450px) {
    font-size: 25px;
  }
`;

const ProgressChart = () => {
  return (
    <MainContainer>
      <TextContainer>
        <p style={{ color: colors.paragraphColor }}>Accuracy</p>
        <Text>75%</Text>
      </TextContainer>
      <ChartContainer>
        <CircularProgress
          variant="static"
          value={75}
          label="hello"
          size="100%"
          thickness={1}
          style={{ color: " #2ec4b6" }}
        />
      </ChartContainer>
    </MainContainer>
  );
};

export default ProgressChart;
