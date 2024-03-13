import styled from "styled-components";

import MainImage from "../assets/MainImage.png";

import { useEffect, useRef, useState } from "react";

import {
  useViewportScroll,
  useMotionValue,
  motion,
  useTransform,
  useCycle
} from "framer-motion";



const VideoS = styled(motion.video)`
  background-color: white;
  outline: none;
  border: none;
  width: auto;
  height: 597px;
  margin: 100px 0 100px 0;

  @media screen and (max-width: 1080px) {
    width: 100%;
    height: auto;
  }
`;

const Videologo = styled.source`
width: 100%;
height: 100%;
  border: none;
`;

const WelcomeDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 96px;
`

const WelcomeTitletext = styled.text`
  color: #000;
  font-size: 46px;
  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    }

`
const WelcomeSubtext = styled.text`
  color: #000;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    }
`
const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 96px 0px 96px 0px;
  padding-top: 16px;
  border-top: 1px solid black;
`

const ContentText = styled.text`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 14px;
    }

  @media screen and (min-width: 600px) {
    white-space: pre-wrap;
    }
`
function Main() {
  const contenttext = "콘텐츠디자인과 시연회는 2020년부터 매년 신입생들을 위해 주최되는 행사입니다.\n신입생들은 시연회를 통해 앞서 입학한 선배들의 작품을 감상할 수 있습니다.\n또한 동아리 선택부터 콘텐츠디자인과 생활에 대해 필요한 전반적인 정보를 얻을 수 있습니다."
  return (
    <ContainerMain>
    <Container>
      <MainContainer>
        <MainImageStyle src={MainImage}/>
        <TextContainerMain>“ 새는 알에서 나오기 위해 투쟁한다. 알은 새의 세계이다.<br/>
        누구든지 태어나려고 하는 자는 하나의 세계를 파괴하여야 한다. “
        </TextContainerMain>
      </MainContainer>
      <VideoCmp/>
      <WelcomeDiv>
        <WelcomeTitletext>WELCOME TO GENESIS</WelcomeTitletext>
          <WelcomeSubtext>
            2024 선린인터넷고등학교 콘텐츠디자인과 시연회 ‘제네시스'.<br/>
            선린으로 오는 모든 학생들이 기존의 세계를 파괴하고 미개척지,<br/>
            세로운 세계를 받아들이는 과정을 조명합니다.<br/>
            또한 조력자의 위치에서 그들과 함께하며 새로운 변화에 적응할 수 있도록 돕습니다.
        </WelcomeSubtext>
      </WelcomeDiv>
      <ContentDiv>
        <ContentText>
          {contenttext}

        </ContentText>
      </ContentDiv>
    </Container>
    </ContainerMain>
  
    );
}


const VideoCmp: React.FC = () => {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const r = useRef<HTMLVideoElement>(null); // useRef에 제네릭 타입으로 HTMLVideoElement를 사용합니다.
  
  const updateAtScroll = () => {
    const video = r.current;
    if (video) {
      const p = scrollYProgress.get();
      console.log(p);
      video.currentTime = 0;
      if ( p > 0.15) {
        video.pause();
        const currentFrame = Math.round((p-0.15) * video.duration * 1200) / 1000;
        video.currentTime = currentFrame;
        console.log(currentFrame);
      }
    }
  };
  useEffect(() => scrollY.onChange(throttle(updateAtScroll, 80)), []);
  
  return (
    <VideoS ref={r} autoPlay>
  <Videologo src="/videos/genesis.mp4" type="video/mp4"/>
</VideoS>

  );
};

function throttle(callback: (...args: any[]) => void, delay: number): () => void {
  let last: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  
  return function (this: any, ...args: any[]): void {
    const context = this;
    const now = +new Date();
    
    if (last !== undefined && now < (last + delay)) {
      // 아직 지정된 시간이 지나지 않았으므로 타이머를 재설정합니다.
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        callback.apply(context, args);
      }, delay);
    } else {
      last = now;
      callback.apply(context, args);
    }
  };
}


export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerMain = styled.div`
  width: 100%;
`
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1040px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1080px) {
        width: 100%;
        padding: 0px 20px 0px 20px;
    }
`


const MainImageStyle = styled.img`
  width: 673px;
  height: auto;


  @media screen and (max-width: 1080px) {
        width: 100%;
    }
`;
const TextContainerMain = styled.text`
  position: absolute;
  bottom: 24px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    }

`