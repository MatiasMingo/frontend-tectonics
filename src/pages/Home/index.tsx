import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import GridBlocks from "../../components/GridBlocks";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlockFirst = lazy(() => import("../../components/MiddleBlockFirst"));
const MiddleBlockSecond = lazy(() => import("../../components/MiddleBlockSecond"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="brain.svg"
        id="intro"
      />
      <MiddleBlockFirst
        title={"Anything you like"}
        content={"If it has to do with programming we do it!"}
        button={"Explore"}
      />
      <GridBlocks />
      <MiddleBlockSecond
        title={"We only use the best tools"}
        content={"For building websites, mobile apps, ML models, data analytics and more."}
        button={"Explore"}
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
