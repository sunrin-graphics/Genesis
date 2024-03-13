import React from "react";
import styled from "styled-components";
import LeftArrowIconBlack from "../assets/LeftArrowIconBlack";


interface ClubFrameProps {
    name: string;
    shortdesc: string;
    department: string;
    logo: string;
}
  

const Clubframe = ({ name, shortdesc, department, logo }: ClubFrameProps) => {
    return (
        <ClubBox>
          <ClubLogoBox>
            <img src={require(`../assets/clubs/${logo}.svg`) } height="120"/>
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>{name}</ClubContentTitle>
              <ClubContent>{shortdesc}</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>{department}</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
    )
}


export default Clubframe;

const ClubBox = styled.div`
  background-color: white;
  cursor: pointer;
`;

const ClubLogoBox = styled.div`
  background: #f9f9f9;
  width: 100%;
  height: 244.263px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubConentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 40px;
`;

const ClubContentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClubContentTitle = styled.text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const ClubContentTitle2 = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const ClubContent = styled.p`
  color: #a0a19e;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

const ClubBottomBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 13px 0;
  @media screen and (min-width: 600px) {
    border-bottom: 1px solid black;
    }
`;

const ClubInfoBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;

    @media screen and (max-width: 600px) {
        display: none;

    }
`;

const ClubTitleBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  position: relative;
`;

const ClubTitle = styled.text`
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
  font-size: 16px;
  font-weight: 500;
`;

const ClubContainerTitleBox = styled.div`
  text-align: left;
  width: 100%;
  border-top: 1px solid black;
`;

const ClubContainerTitle = styled.h1`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  font-style: normal;
  display: flex;
  padding: 20px 0;
  font-family: Pretendard-Semibold;
`;
