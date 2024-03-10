import styled from "styled-components";
import Logo from "../assets/Logo";
import InstarIcon from "../assets/InstarIcon";
import FacebockIcon from "../assets/FacebockIcon";

function Footer() {
  return (
    <FooterContainerMain>
    <FooterContainer>
      <FooterInfoBox>
        <Logo />
        <FooterInfoContentBox>
          <FooterInfoContent>
            선린인터넷고등학교 콘텐츠디자인과
          </FooterInfoContent>
          <FooterInfoContent>
            서울특별시 용산구 원효로97길 33-4 3호관 2층
          </FooterInfoContent>
          <FooterInfoContent>
            © 2024. sunrin contents. all rights reserved.
          </FooterInfoContent>
        </FooterInfoContentBox>
      </FooterInfoBox>
      <FooterSnsBox>
        시연회
        <FooterSnsBtn href="https://www.google.com">
          <InstarIcon />
        </FooterSnsBtn>
        <FooterSnsBtn href="https://www.google.com">
          <FacebockIcon />
        </FooterSnsBtn>
      </FooterSnsBox>
    </FooterContainer>
    </FooterContainerMain>
  );
}

export default Footer;

const FooterContainerMain = styled.div`
  width  : 100%;
  
  padding: 90px 0px 30px 0px;
`

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1040px;
  margin: 0 auto;
  @media screen and (max-width: 1060px) {
    width: 100%;
    padding: 0px 20px 0px 20px;
  }
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterInfoContentBox = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FooterInfoContent = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const FooterSnsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const FooterSnsBtn = styled.a`
  cursor: pointer;
`;
