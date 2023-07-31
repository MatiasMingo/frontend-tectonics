import { lazy } from "react";
import LoginContent from "../../content/LoginContent.json";

const LoginForm = lazy(() => import("../../components/LoginForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Login = () => {
  return (
    <Container>
      <ScrollToTop />
      <LoginForm
        title={LoginContent.title}
        content={LoginContent.text}
        id="login"
      />
    </Container>
  );
};

export default Login;
