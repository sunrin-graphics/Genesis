import React, { useState } from "react";
import styled from "styled-components";
import LogoBig from "../assets/LogoBig";

import RightArrowIcon from "../assets/RightArrowIcon";
import LeftArrowIconBlack2 from "../assets/LeftArrowIconBlack2";


interface FaqData {
  question: string;
  answer: string;
}


const faqData = [
  {
    question: "시연회가 도대체 무엇인가요?",
    answer:
      "콘텐츠디자인과 시연회는 2020년부터 매년 신입생들의\n동아리 선택과 앞으로의 선린 생활을 도와주기 위해 준비하는 행사입니다.",
  },
  {
    question: "언제 진행되나요?",
    answer:
      "3월 8일 7교시에 오프라인 행사가 진행되며, 3월 10일부터\n동아리 신청이 가능합니다.",
  },
  {
    question: "학교에서 노트북이 필요한가요?",
    answer:
      "노트북 소지가 필수는 아니지만 동아리에서 쓰는 용도 외에도\n과제를 수행하기 위해 노트북이 필요한 경우가 있습니다.",
  },
  {
    question: "동아리가 고민될 때는 어떡하나요?",
    answer: "시연회 사이트를 통해 여러분의 적성에 맞는 동아리를 찾아보세요.",
  },
  {
    question: "포트폴리오를 받나요?",
    answer:
      "모든 동아리가 포트폴리오를 받습니다.\n그러니 면접 지원 폼에서 포트폴리오 첨부를 잊지마세요.",
  },
  {
    question: "전부 탈락하면 어떻게 되나요?",
    answer: "추가 모집이 필요한 동아리에서 추가모집을 진행합니다.",
  },
  {
    question: "궁금한 질문이 여기에 없어요.",
    answer: "시연회 인스타 DM으로 질문을 남겨주시면 답변해드리겠습니다.",
  },
];


const Faq: React.FC = () => {
  const [currentFaqIndex, setCurrentFaqIndex] = useState<number>(0);

  const handleNextFaq = (): void => {
    setCurrentFaqIndex((prevIndex) => (prevIndex === faqData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevFaq = (): void => {
    setCurrentFaqIndex((prevIndex) => (prevIndex === 0 ? faqData.length - 1 : prevIndex - 1));
  };

  return (
    <Container>
      <Containerin>
        <ClubContainerTitleBox>
          <ClubContainerTitle>FAQ</ClubContainerTitle>
        </ClubContainerTitleBox>
        <ContentDiv>
          <ContentDivDiv>
            <ContentText>{faqData[currentFaqIndex].question}</ContentText>
            <ContentButtonDiv>
              <LeftArrowIconWrapper onClick={handlePrevFaq}>
                <LeftArrowIconBlack2 />
              </LeftArrowIconWrapper>
              <RightArrowIconWrapper onClick={handleNextFaq}>
                <RightArrowIcon />
              </RightArrowIconWrapper>
            </ContentButtonDiv>
          </ContentDivDiv>
          <ContentDivDiv2>

          </ContentDivDiv2>
        </ContentDiv>
        <ContentDiv2>
            <AnswerText>{faqData[currentFaqIndex].answer}</AnswerText>
        </ContentDiv2>
        <LogoBig/>
      </Containerin>
    </Container>
  );
};

export default Faq;

const AnswerText = styled.span`
  line-height: normal;
  white-space: pre-wrap;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ContentButtonDiv = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
`;

const ContentText = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 24px;
  flex: 1;
  margin-top: 90px;
`;

const ContentDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  gap: 24px;
  flex: 1;
  margin-top: 32px;
  padding-bottom: 246px;
`;

const ContentDivDiv = styled.div`
  width: 100%;
  flex: 1;
  border-bottom: 1px solid black;
  padding-bottom: 12px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
const ContentDivDiv2 = styled.div`
  width: 100%;
  flex: 1;
  border-bottom: 1px solid black;
  padding-bottom: 12px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;


  @media screen and (max-width: 1080px) {
    display: none;
  }
`;


const Container = styled.div`
  padding-top: 150px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding-top: 112px;
  }
`;

const Containerin = styled.div`
  margin: 0 auto;
  width: 1040px;
  @media screen and (max-width: 1080px) {
    width: 100%;
    padding: 0px 20px 0px 20px;
  }
`;

const ClubContainerTitleBox = styled.div`
  text-align: left;
  width: 100%;
  border-top: 1px solid black;
`;

const ClubContainerTitle = styled.h1`
  text-align: center;
  font-size: 46px;
  font-weight: 600;
  font-style: normal;
  display: flex;
  padding: 20px 0;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const LeftArrowIconWrapper = styled.div`
  cursor: pointer;
`;

const RightArrowIconWrapper = styled.div`
  cursor: pointer;
`;
