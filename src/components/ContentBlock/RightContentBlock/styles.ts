import { Row, Col } from "antd";
import styled from "styled-components";
import { SvgIcon } from "../../../common/SvgIcon";

export const CustomCol = styled(Col)`
  position: fixed;
  margin-left: 50vw;
  @media (min-width: 250px) and (max-width: 600px) {
    position: inline-block;
    margin-top:-18vh;
    width: 20vw;
  }
`;

export const CustomSvgIcon = styled(SvgIcon)`
  @media (min-width: 250px) and (max-width: 600px) {
    width: 20%;
    height: 20%;
  }
`;

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  margin-top:-10vh;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }

  @media (min-width: 250px) and (max-width: 600px) {
    font-size: 0.8em;
    width: 50vw;
    margin-top:-25vh;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #000000;
  font-weight: bold;
  font-size: 1.7em;
  width: 35vw;
  @media (min-width: 250px) and (max-width: 600px) {
    width: 70vw;
    font-size: 2em;
    margin-top: 35vh;
    text-align: right;
    margin-left: 20vw;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
  @media (min-width: 250px) and (max-width: 600px) {
    margin-right: 20vw;
  }
`;

export const H6 = styled("h6")`
  color: #fcf3f6;
  font-size: 2.6em;
  margin-top: 7vh;
  width: 40vw;
  @media (min-width: 250px) and (max-width: 600px) {
    font-size: 3em;
    width: 90vw;
    text-align: center;
    margin-top: 20vh;
  }
`;

export const CustomImg = styled("img")`
  width: 40vw;
  @media (min-width: 250px) and (max-width: 600px) {
    width: 90vw;
    margin-left: -31.5vw;
    margin-top: 15vh;
  }
`;