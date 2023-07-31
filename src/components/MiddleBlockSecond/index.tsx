import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper, Title } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlockSecond = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{t(title)}</Title>
              <Content>{t(content)}</Content>
            </Col>
            <Row>
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={"react_logo.svg"} width="50%" height="50%" />
                <SvgIcon src={"flutter_logo.svg"} width="40%" height="40%" />
              </Col>
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={"next-js_logo.svg"} width="50%" height="50%" />
                <SvgIcon src={"vue-js_logo.svg"} width="40%" height="40%" />
              </Col>
            </Row>
            <Row style={{marginLeft: "3vw"}}>
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={"django_logo.svg"} width="50%" height="50%" />
                <SvgIcon src={"ror_logo.svg"} width="50%" height="50%" />
              </Col>
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={"python_logo.svg"} width="50%" height="50%" />
                <SvgIcon src={"rust_logo.svg"} width="40%" height="40%" />
              </Col>
            </Row>
            <Row style={{marginLeft: "3vw"}}>
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={"elixir_logo.svg"} width="50%" height="50%" />
                <SvgIcon src={"r_logo.svg"} width="40%" height="40%" />
              </Col>
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={"pytorch_logo.svg"} width="25%" height="50%" />
                <SvgIcon src={"tensorflow_logo.svg"} width="50%" height="50%" />
              </Col>
            </Row>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlockSecond);
