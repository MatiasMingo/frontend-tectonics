import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, H6, H7, CustomRow, CustomCol, Title} from "./styles";
import { RiGovernmentLine } from 'react-icons/ri';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { GiRobotLeg } from 'react-icons/gi';
import { SlEnergy } from 'react-icons/sl';
import { FaConnectdevelop } from 'react-icons/fa';
import { BsChatLeftText } from 'react-icons/bs';
import { MdEmojiTransportation } from 'react-icons/md';
import { TbBusinessplan } from 'react-icons/tb';
import { AiOutlineStock } from 'react-icons/ai';
import { GiWheat } from 'react-icons/gi';
import { GiDna2 } from 'react-icons/gi';
import Government from "../../pages/Government";
import { useHistory } from 'react-router-dom';


const GovernmentGridBlocks = ({ t }: any) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const history = useHistory();

  return (
    <div>
      <CustomRow justify="space-between" align="middle">
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <RiGovernmentLine size={32} />
          <H6>{t("Legislative")}</H6>
          <H7>Drafting, debating, and passing of legislation that guides and regulates various aspects of society</H7>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <AiOutlineMedicineBox size={32} />
          <H6>{t("Executive")}</H6>
          <H7>Administration of government agencies, decision-making, policy implementation, and overseeing the day-to-day operations of the government.</H7>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} >
          <GiRobotLeg size={32} />
          <H6>{t("Judiciary")}</H6>
          <H7> Handling of legal disputes, ensuring justice, and upholding the rule of law.</H7>
        </CustomCol>
      </CustomRow>
      <CustomRow justify="space-between" align="middle">
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <SlEnergy size={32} />
          <H6>{t("Finance and Economy")}</H6>
          <H7> Fiscal management, economic planning, promoting economic growth, and ensuring financial stability</H7>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <FaConnectdevelop size={32} />
          <H6>{t("Defense and Security")}</H6>
          <H7>Maintaining armed forces, border security, intelligence agencies, and disaster preparedness and response</H7>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <GiWheat size={32} />
          <H6>{t("Education")}</H6>
          <H7>Establishing education policies, funding schools and universities, setting curriculum standards, and promoting educational opportunities.</H7>
        </CustomCol>
      </CustomRow>
      <CustomRow justify="space-between" align="middle">
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <H6>{t("Health and Social Services")}</H6>
          <H7>healthcare policy, public health protection, access to healthcare services, social security, and assistance programs for vulnerable populations.</H7>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <H6>{t("Infrastructure and Transportation")}</H6>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <H6>{t("Environmental Protection")}</H6>
        </CustomCol>
      </CustomRow>
      <CustomRow justify="space-between" align="middle">
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <H6>{t("Foreign Affairs and Diplomacy")}</H6>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <H6>{t("Emergency Response Planning")}</H6>
        </CustomCol>
        <CustomCol lg={6} md={8} sm={8} xs={8} style={{ cursor: 'pointer' }}>
          <H6>{t("Fraud and Risk Detection")}</H6>
        </CustomCol>
      </CustomRow>
    </div>
  );
};

export default withTranslation()(GovernmentGridBlocks);
