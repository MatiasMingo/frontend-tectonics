import { Row, Col, message } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { login, check_authentication } from "../../api"; // Import the login function
import { LoginProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { LoginContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { useHistory } from 'react-router-dom';
import React, { useState, useContext } from "react";
import { UsernameContext } from "../../UsernameContext";




  const LoginForm = ({ title, content, id, t }: LoginProps) => {
    const { values, errors, handleChange} = useForm(
      validate
    ) as any;
    const { username, setUsername } = useContext(UsernameContext);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  const history = useHistory();

  
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await login(values.email, values.password);
      const responseData = response.data; // Access the response data
      const statusCode = response.status;
      if (statusCode === 200) {
        setUsername(values.email);
        const authenticationResponse = await check_authentication(values.email);
        if (authenticationResponse.status == 200) {
          message.success('Login successfull');
          history.push("/dashboard");
        } else {
          message.error('Invalid email or password');
        }
      } else {
        message.error('Invalid email or password');
      } 
    } catch (error) {
      console.log("holamat");
      console.error(error); // Handle login error
      message.error('Invalid email or password');
    }
  };

  return (
    <LoginContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleLogin}>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password || ""}
                  onChange={handleChange}
                />
                <ValidationType type="password" />
              </Col>
              <ButtonContainer>
                <Button name="submit">
                  {t("Login")}
                </Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </LoginContainer>
  );
};

export default withTranslation()(LoginForm);
