import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Logo";
import Menu from "../assets/menu";
import LeftArrowIcon from "../assets/LeftArrowIcon";
import { useState } from "react";
import React from "react";
import Close from "../assets/Close"

interface HeaderBtnBoxProps {
  isToggled: boolean;
}

function Header() {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <HeaderContainermid isToggled={isToggled}>
      <HeaderContainer>
        <HeaderTitle>
          <Link to={"/"}>
            <Logo />
          </Link>
          <ToggleButton onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? <Close /> : <Menu />}
          </ToggleButton>
        </HeaderTitle>
        <HeaderBtnBox isToggled={isToggled}>
          <Link to={"/"} onClick={() => setIsToggled(!isToggled)}>
            <HeaderBtn>
              <HeaderBtnText>시연회 소개</HeaderBtnText>
            </HeaderBtn>
          </Link>
          <Link to={"/clubs"} onClick={() => setIsToggled(!isToggled)}>
            <HeaderBtn>
              <HeaderBtnText>동아리 목록</HeaderBtnText>
            </HeaderBtn>
          </Link>
          <Link to={"/faq"} onClick={() => setIsToggled(!isToggled)}>
            <HeaderBtn>
              <HeaderBtnText>FAQ</HeaderBtnText>
            </HeaderBtn>
          </Link>
        </HeaderBtnBox>
        <Snsdiv isToggled={isToggled}>
          <Sns>Facebook</Sns>
          <Sns>Instagram</Sns>
        </Snsdiv>
        <HeaderLinkBtn isToggled={isToggled}>
          지망 폼 작성하기
          <LeftArrowIcon />
        </HeaderLinkBtn>
      </HeaderContainer>
    </HeaderContainermid>
  );
}

export default Header;

const HeaderContainermid = styled.div<HeaderBtnBoxProps>`
  width: 100%;
  position: fixed;
  z-index: 2;
  @media screen and (max-width: 600px) {
    ${(props) => (props.isToggled ? "height: 100%;" : "")};
    
  }
`;

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1040px;
  padding: 16px 0px 16px 0px;
  margin: 0 auto;
  @media screen and (max-width: 1060px) {
    padding: 16px 20px 16px 20px;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

const HeaderTitle = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ToggleButton = styled.div`
  display: none;
  cursor: pointer; 

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const HeaderBtnBox = styled.div<HeaderBtnBoxProps>`
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.isToggled ? "flex" : "none")};
    margin-top: 54px;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    gap: 16px;
  }
`;

const HeaderBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: 600;
  font-size: 16px;
  padding: 6px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    text-align: start;
    padding: 8px 0px 8px 0px;
  }
`;

const HeaderBtnText = styled.text`
  width: 100%;
  font-size: 16px;
  color: #000;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 30px;
    font-weight: 600;
  }
`;

const HeaderLinkBtn = styled.div<HeaderBtnBoxProps>`
  background: #000;
  color: white;
  padding: 8px 12px;
  border: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: start;
  gap: 16px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.isToggled ? "flex" : "none")};
    justify-content: start;
    margin-top: 12px;
  }
`;

const Sns = styled.text`
  color: #999;
  font-size: 16px;
  font-weight: 600;
`;

const Snsdiv = styled.div<HeaderBtnBoxProps>`
  margin-top: 32px;
  display: none;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.isToggled ? "flex" : "none")};
    justify-content: start;
    padding: 6px 0px 6px 0px;
  }
`;
