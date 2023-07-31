import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30vh;
  margin-top: 10vh;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }

  @media (min-width: 250px) and (max-width: 600px) {
    margin-bottom: 20vh;
    margin-top: -5vh;
  }
`;

export const Title = styled("h6")`
  font-size: 3.5em;
  color: #000000;
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
