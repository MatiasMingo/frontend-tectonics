import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import * as THREE from "three";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  H6,
  CustomCol,
} from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={11}>
            <ContentWrapper>
              <H6>{t(title)}</H6>
              <Content>{t(content)}</Content>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={11}>
            <ContentWrapper style={{marginLeft: "5vw"}}>
              <img src={`/img/animations/tectonics.gif`} alt={"Tectonics"} width="500px" height="250px"/>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
