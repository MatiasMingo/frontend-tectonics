import styled from "styled-components";
import { Row, Col } from 'antd';

export const Title = styled("h1")`
  font-size: 2.4em;
  color: #e7807c;
  text-align: center;
`;

export const CustomRow = styled(Row)`
  margin-bottom: 5vw;
  margin-left: 15vw;
  margin-right: 15vw;
`;

export const CustomCol = styled(Col)`
  border: 3px solid #e7807c;
  border-radius: 6px;
  text-align: center;
  height: 15vh;
  padding-top: 4vh;
  transition: all 0.3s ease; /* Add transition for smooth animation */

  &:hover {
    background-color: rgba(231, 128, 124, 0.8); /* Change background color with opacity */
    transform: scale(1.8); /* Scale up the element */
  }
`;


export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const H6 = styled("h6")`
  font-size: 1.2em
`;

export const H7 = styled("h6")`
  font-size: 0.9em;
  color: #e7807c1;
`;