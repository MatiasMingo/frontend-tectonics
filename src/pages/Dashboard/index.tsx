import { lazy } from "react";
import { Container, H3 } from './styles';
import { UsernameProvider } from "../../UsernameContext";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Menu = lazy(() => import("../../components/Menu"));

const Dashboard = () => {
  return (
    <UsernameProvider>
      <Container>
        <ScrollToTop />
        <H3>Dashboard</H3>
        <Menu>
        </Menu>
      </Container>
    </UsernameProvider>
  );
};

export default Dashboard;
