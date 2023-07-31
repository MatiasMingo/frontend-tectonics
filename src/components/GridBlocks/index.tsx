import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, H5, H6, CustomRow, CustomCol, Title, H7} from "./styles";
import { RiGovernmentLine } from 'react-icons/ri';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { GiRobotLeg } from 'react-icons/gi';
import { SlEnergy } from 'react-icons/sl';
import { FaConnectdevelop } from 'react-icons/fa';
import { MdEmojiTransportation } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { SvgIcon } from "../../common/SvgIcon";


const GridBlocks = ({ t }: any) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const history = useHistory();
  const handleDeepCommuneClick = () => {
    window.open("https://www.deepcommune.com/", '_blank');
  };

  const handleJustForFundClick = () => {
    window.open("https://www.justfor.fund/", '_blank');
  };

  const handleLexrankitClick = () => {
    window.open("https://www.lexrankit.com/", '_blank');
  };

  const handleSubsoleClick = () => {
    window.open("https://subsole-frontend.vercel.app/", '_blank');
  };

  const handleBugClick = () => {
    window.open("https://bug-network.com/", '_blank');
  };

  return (
    <div id={"work"} style={{paddingTop: "5vh"}}>
      <H5 style={{textAlign: 'center'}}>Our work</H5>
      <CustomRow justify="space-between" align="middle">
        <CustomCol lg={9} md={8} sm={9} xs={11} style={{ cursor: 'pointer' }} onClick={handleDeepCommuneClick}>
        <SvgIcon src="deepcommune_logo.svg" width="110px" height="50px" />
          <H6>{t("DeepCommune")}</H6>
          <H7>A.I.</H7>
        </CustomCol>
        <CustomCol lg={9} md={8} sm={9} xs={11} style={{ cursor: 'pointer' }} onClick={handleJustForFundClick}>
        <SvgIcon src="justforfund_logo.svg" width="80px" height="60px" />
          <H6>{t("JustForFund")}</H6>
          <H7>FinTech</H7>
        </CustomCol>
      </CustomRow>
      <CustomRow justify="space-between" align="middle">
        <CustomCol lg={9} md={8} sm={9} xs={11} style={{ cursor: 'pointer' }} onClick={handleLexrankitClick}>
        <SvgIcon src="lexrankit_logo.svg" width="60px" height="60px" />
          <H6>{t("Lexrankit")}</H6>
          <H7>LegalTech</H7>
        </CustomCol>
        <CustomCol lg={9} md={8} sm={9} xs={11} style={{ cursor: 'pointer' }} onClick={handleSubsoleClick}>
          <SvgIcon src="subsole_logo.svg" width="50px" height="50px" />
          <H6>{t("Subsole")}</H6>
          <H7>Modular Construction</H7>
        </CustomCol>
      </CustomRow>
      <CustomRow justify="space-between" align="middle">
        <CustomCol lg={9} md={8} sm={9} xs={11} style={{ cursor: 'pointer' }} onClick={handleBugClick}>
          <SvgIcon src="bug_logo.svg" width="60px" height="60px" />
          <H6>{t("BUG")}</H6>
          <H7>Creative Industries</H7>
        </CustomCol>
        <CustomCol lg={9} md={8} sm={9} xs={11} style={{ cursor: 'pointer' }}>
        </CustomCol>
      </CustomRow>
    </div>
  );
};

export default withTranslation()(GridBlocks);
