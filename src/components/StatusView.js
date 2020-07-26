import React from "react";

import ProgressChart from "./ProgressChart";

// Importing styles
import { colors } from "../styles/ColorPalette";

import styled from "styled-components";

const MainBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 450px) {
    flex-direction: row;
    padding-left: 2px;
    padding-right: 2px;
    justify-content: space-evenly;
  }
`;

const ChartBox = styled.div`
  height: 250px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 450px) {
    margin-bottom: 5px;
    height: 150px;
    padding-top: 0px;
  }
`;

const TextBox = styled.div`
  height: 160px;

  @media (max-width: 450px) {
  }
`;

const PText = styled.p`
  color: ${colors.paragraphColor};
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  @media (max-width: 450px) {
    text-align: left;
  }
`;

const SpanText = styled.span`
  color: ${colors.brightText};
  font-weight: 700;
  font-size: 30px;
  margin-right: 5px;
  @media (max-width: 450px) {
  }
`;

const StatusView = () => {
  return (
    <MainBox>
      <ChartBox>
        <ProgressChart />
      </ChartBox>
      <TextBox>
        <PText>COMPLETED</PText>
        <PText>
          <SpanText>100</SpanText>PROBLEMS
        </PText>
        <PText>CORRECT</PText>
        <PText>
          <SpanText>75</SpanText>PROBLEMS
        </PText>
      </TextBox>
    </MainBox>
  );
};

export default StatusView;
