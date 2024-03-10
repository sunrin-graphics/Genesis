import styled from "styled-components";

import MainImage from "../assets/MainImage.png";

function Main() {
  return (
    <ContainerMain>
    <Container>
      <MainTitle>
        2024<br/>
        선린인터넷고등학교<br/>
        콘텐츠디자인과<br/>
        시연회
      </MainTitle>
      <MainImageStyle src={MainImage}/>
      <TextContainer>
        <TextContainerSubtitle>SUNRIN CONTENTS DESIGN DEMONSTRAION</TextContainerSubtitle>
        <TextContainerMain>
          콘텐츠디자인과 시연회는 2020년부터 매년 신입생들을 위해 주최되는 행사입니다.<br />
          신입생들은 시연회를 통해 앞서 입학한 선배들의 작품을 감상할 수 있습니다.<br />
          또한 동아리 선택부터 콘텐츠디자인과 생활에 대해 필요한 전반적인 정보를 얻을 수 있습니다.<br />
        </TextContainerMain>
      </TextContainer>
      <TextContainer>
        <TextContainerSubtitle>WELCOME TO GENESIS</TextContainerSubtitle>
        <TextContainerMain>
          2024 선린인터넷고등학교 콘텐츠디자인과 시연회 ‘제네시스'.<br />
          선린으로 오는 모든 학생들이 기존의 세계를 파괴하고 미개척지, 세로운 세계를 받아들이는 과정을 조명합니다.<br />
          또한 조력자의 위치에서 그들과 함께하며 새로운 변화에 적응할 수 있도록 돕습니다.<br />
        </TextContainerMain>
      </TextContainer>
    </Container>
    </ContainerMain>
  
    );
}

export default Main;

const ContainerMain = styled.div`
padding: 150px 0px 482px 0px;
  width: 100%;
`
const Container = styled.div`
  margin: 0 auto;
  width: 1040px;
  flex-direction: column;
`

const MainTitle = styled.h1`
  color: #000;
  font-weight: 600;
  line-height: normal;
  font-size: 64px;
`

const MainImageStyle = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 74px;
`;
const TextContainer = styled.div`
  padding: 96px 0px 96px 0px;
`

const TextContainerSubtitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 32px;
`

const TextContainerMain = styled.text`
  font-size: 24px;
  font-weight: 500;
line-height: normal;
`