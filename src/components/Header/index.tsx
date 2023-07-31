import React, { useState, useContext } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Link } from 'react-router-dom';
import i18n from "i18next";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { UsernameContext } from "../../UsernameContext";
import { logout } from "../../api";


const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const { username } = useContext(UsernameContext);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to the login page
      window.location.href = "/login";
    } catch (error) {
      // Handle error if logout fails
      console.error("Logout failed:", error);
      // You can display an error message or handle the error in any other way
    }
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
  if (username) {
    // User is authenticated, display logout link and Contacto button
    return (
      <>
        <CustomNavLinkSmall onClick={handleLogout}>
          <Span>{t("Logout")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px", marginLeft: "1rem" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contacto")}</Button>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <LanguageSwitchContainer>
            <LanguageSwitch onClick={() => handleChange("en")}>
            <svg height="35px" width="35px" style={{ borderRadius: '50%', border: '2px solid #e7807c' }}>
              <text x="4px" y="18px" style={{fontSize: "0.8em"}}>EN</text>
            </svg>
            </LanguageSwitch>
            <LanguageSwitch onClick={() => handleChange("es")}>
            <svg height="35px" width="35px" style={{ borderRadius: '50%', border: '2px solid #e7807c' }}>
              <text x="5px" y="18px" style={{fontSize: "0.8em"}}>ES</text>
            </svg>
            </LanguageSwitch>
          </LanguageSwitchContainer>
        </CustomNavLinkSmall>
      </>
    );
  } else {
    // User is not authenticated, display login and contact links
    return (
      <>
        <CustomNavLinkSmall as={Link} to="/documentation">
          <Span>{t("Documentation")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall as={Link} to="/login">
          <Span>{t("Login")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px", marginLeft: "1rem" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <LanguageSwitchContainer>
            <LanguageSwitch onClick={() => handleChange("en")}>
            <svg height="30px" width="30px" style={{ borderRadius: '50%', border: '2px solid #e7807c' }}>
              <text x="4px" y="18px" style={{fontSize: "0.8em"}}>EN</text>
            </svg>
            </LanguageSwitch>
            <LanguageSwitch onClick={() => handleChange("es")}>
            <svg height="30px" width="30px" style={{ borderRadius: '50%', border: '2px solid #e7807c' }}>
              <text x="5px" y="18px" style={{fontSize: "0.8em"}}>ES</text>
            </svg>
            </LanguageSwitch>
          </LanguageSwitchContainer>
        </CustomNavLinkSmall>
      </>
    );
  }
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="220px" height="200px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
