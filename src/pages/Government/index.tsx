import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import GovernmentGridBlocks from "../../components/GovernmentGridBlocks";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Government= () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={"AI powered government"}
        content={""}
        icon="government.svg"
        id="intro"
      />
      <GovernmentGridBlocks />
    </Container>
  );
};

export default Government;
