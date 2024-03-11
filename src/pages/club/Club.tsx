import styled from "styled-components"
import { useParams } from "react-router-dom";

import LeftArrowIconBig from "../../assets/LeftArrowIconBig";
import clubList, { ClubList } from "../../data/clubdata";
import React, { useState } from "react";
import CloseWhite from "../../assets/Closewhite"
import RightArrowIcon from "../../assets/RightArrowIcon";

function Club() {

    const clubData: ClubList = clubList;
    let { id } = useParams();

    const clubInfo = clubData.find(club => club.id === Number(id));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState("");
    const [isVideo, setIsVideo] = useState(false);

    const handlePictureBoxClick = (imageUrl: string, isVideo: boolean) => {
        setModalImageUrl(imageUrl);
        setIsModalOpen(true);
        setIsVideo(isVideo);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const modal = isModalOpen ? (
        <ModalBackground onClick={closeModal}>
            <ModalContent>
                <ClubnameModal>{clubInfo?.name}</ClubnameModal>
                <CloseButton onClick={closeModal}><CloseWhite/></CloseButton>
                {!isVideo ? (
                    <ModalImage src={modalImageUrl} alt="Modal" />
                ) : (
                    <Youtube src={modalImageUrl} />
                )}
            </ModalContent>
        </ModalBackground>
    ) : null;
    
    return (
        <>
        {modal}
        <Maindiv>
            <Subdiv>
                <ClubTitle>
                    <Clubname>{clubInfo?.name}</Clubname>
                    <ClublogoImage src={require(`../../assets/clubs/${clubInfo?.logo}.svg`)}/>
                </ClubTitle>
                <DescriptionMain>
                    <DescriptionText>
                        {clubInfo?.longdesc}</DescriptionText>
                    <SubDescription>
                        <MobileContain>
                        <SubContainer>
                            <SubtextTitle>
                                소속
                            </SubtextTitle>
                            <SubtextContain>
                                콘텐츠디자인과
                            </SubtextContain>
                        </SubContainer>
                        <SubContainer>
                            <SubtextTitle>
                                분야
                            </SubtextTitle>
                            <SubtextContain>
                                만화, 일러스트레이션
                            </SubtextContain>
                        </SubContainer>
                        </MobileContain>
                        <SubContainer>
                            <SubtextTitle>
                                외부링크
                            </SubtextTitle>
                            {clubInfo?.link.map((content) => (
                                <>
                                    <SubtextWebsiteContainer href={content.url} target="_blank">
                                        <SubtextWebsite>
                                            {content.label}
                                        </SubtextWebsite>
                                        <RightArrowIcon/>
                                    </SubtextWebsiteContainer>
                                </>

                            ))}
                        </SubContainer>
                        <JoinButton>
                            <JoinButtonText>
                                지원하기
                            </JoinButtonText>
                            <LeftArrowIconBig />
                        </JoinButton>
                    </SubDescription>
                </DescriptionMain>
                <AcheivetitleBox>
                    <TitleText>주요 수상 실적</TitleText>
                    <SubTitleText>주요 수상 실적을 확인해보세요</SubTitleText>
                </AcheivetitleBox>
                {clubInfo?.awards.map((club) => (
                <>
                  <AcheiveBox>
                    <AcheiveBoxYear>
                        {club.year}
                    </AcheiveBoxYear>
                    <AcheiveBoxContentContainer>
                        {club.content.map((content) => (
                            <>
                                <AcheiveBoxContentAward>
                                    {content}
                                </AcheiveBoxContentAward>
                            </>

                        ))}
                    </AcheiveBoxContentContainer>
                    
                </AcheiveBox>
                </>
              ))}
                
                <AcheivetitleBox>
                    <TitleText>작품목록</TitleText>
                    <SubTitleText>이곳에서 작년 선배들의 작품을<br/>
                    감상할 수 있습니다.</SubTitleText>
                </AcheivetitleBox>
                <PictureContainer>
                    {clubInfo?.gallery.map((item, i) => (
                        <PictureBox key={i} onClick={() => handlePictureBoxClick(item.url, item.isVideo)}>
                        <PictureContent src={!item.isVideo ? item.url: item.thumbnail} />
                        </PictureBox>
                    ))}
                </PictureContainer>
                <MobilePictureContainer>
                    {clubInfo?.gallery.map((item, i) => (
                        <MobilePictureBox key={i} onClick={() => handlePictureBoxClick(item.url, item.isVideo)}
                            >
                            <MobilePictureContent src={item.url} />
                        </MobilePictureBox>
                    ))}
                </MobilePictureContainer>
                
            </Subdiv>
        </Maindiv>

        </>
    );
}

const MobileContain = styled.div`
    display: flex;
        flex-direction: column;

    gap: 24px;
    @media screen and (max-width: 1080px) {
        
        flex-direction: row;
    }
`
const Maindiv = styled.div`
    padding-top: 150px;
    width: 100%;
    @media screen and (max-width: 1080px) {
        padding-top: 112px;

    }
`
const Subdiv = styled.div`
    margin: 0 auto;
    width: 1040px;
    @media screen and (max-width: 1080px) {
        width: 100%;
        padding: 0px 20px 0px 20px;
    }
` 

const ClubTitle = styled.div`

    border-bottom: 1px solid black;
    width: 100%;
    padding-bottom: 12px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const DescriptionMain = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
`
const DescriptionText = styled.span`
    margin-top: 24px;
    line-height: 1.6;
    white-space: pre-wrap;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;

    @media screen and (max-width: 1080px) {
        margin-top: 12px;
        font-size: 14px;
    }
`

const Clubname = styled.text`
    font-size: 48px;
    font-weight: 600;

    
    @media screen and (max-width: 1080px) {
        font-size: 24px;
        
    }
`

const ClublogoImage = styled.img`
    height: 60px;

    @media screen and (max-width: 1080px) {
        height: 30px;
        
    }
`

const SubDescription = styled.div`
    margin-top: 24px;
    width: 222px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    
    @media screen and (max-width: 1080px) {
        margin-top: 48px;
        width: 100%;
        gap: 36px;
    }

`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

`

const SubtextTitle = styled.text`
    color: #A0A19E;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (max-width: 1080px) {
        font-size: 13px;
    }
` 

const SubtextContain = styled.text`
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    @media screen and (max-width: 1080px) {
        font-size: 13px;
    }
`

const SubtextWebsiteContainer = styled.a`
     display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
`
const SubtextWebsite = styled.text`
    color: #000;
    text-align: center;
    border-bottom: #000 solid 1.5px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    @media screen and (max-width: 1080px) {
        font-size: 13px;
    }
`

const JoinButton = styled.div`
    height: 40px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 12px;
    align-items: center;
    display: flex;
    border: 1px solid black;
    cursor: pointer;

    @media screen and (max-width: 1080px) {
    }
`
const JoinButtonText = styled.text`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
`


const AcheivetitleBox = styled.div`
    display: flex;
    margin-top: 100px;
    padding-top: 14px;
    padding-bottom: 22px;
    width: 100%;
    border-top: 1px solid black;
    justify-content: space-between;

    @media screen and (max-width: 1080px) {
        margin-top: 80px;
    }
`;

const TitleText = styled.text`
    font-size: 28px;
    font-style: normal;
    font-weight: 600;

    @media screen and (max-width: 1080px) {
        font-size: 24px;
        font-style: normal;
    }
`

const SubTitleText = styled.text`
    font-size: 16dp;
    font-style: normal;
    font-weight: 500;


    @media screen and (max-width: 1080px) {
        display: none;
    }
`

const AcheiveBox = styled.div`
    margin-top: 42px;
    width: 438px;
    display: flex;
    justify-content: space-between;
    

    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`
const AcheiveBoxYear = styled.text`
    font-weight: 600;
    font-size: 18px;
    font-style: normal;

    @media screen and (max-width: 1080px) {
        font-size: 14px;
    }
`
const AcheiveBoxContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`

const AcheiveBoxContentAward = styled.text`
    font-size: 18px;

text-align: right;
    font-style: normal;
    white-space: pre-wrap;
    align-items: end;
    font-weight: 500;
    margin-bottom: 8px;
    line-height: 1.3;

    @media screen and (max-width: 1080px) {
        font-size: 14px;
    }
`
const PictureContainer = styled.div`
    width: 100%;
    margin-top: 64px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6px;
    @media screen and (max-width: 1080px) {
        display: none;
    }
`
const MobilePictureContainer = styled.div`
    width: 100%;
    overflow-x: auto; /* 가로 스크롤을 추가하여 사진이 있는 부분만 스크롤 가능하도록 설정 */
    overflow-y: hidden;
    white-space: nowrap; /* 모든 요소가 한 줄에 나열되도록 설정 */
    display: flex;
    @media screen and (min-width: 1080px) {
        display: none;
    }
`;

const MobilePictureBox = styled.div`
    z-index: 1;
    width: 255px;
    height: 255px;
    background: #d9d9d9;
    cursor: pointer;
    margin-right: 6px; /* 각 사진 사이의 간격 설정 */
`;



const PictureBox= styled.div`
    z-index: 1;
  width: 255px;
  height: 255px;
  background: #d9d9d9;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`
const PictureContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const MobilePictureContent = styled.img`
    width: 255px;
    height: 255px;
  object-fit: cover;
`


const ModalBackground = styled.div`
    display: flex;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    position: relative;
`;

const ModalImage = styled.img`
    width: auto;
    height: auto;
    max-height: 600px;
    max-width: 1040px;


    @media screen and (max-width: 1080px) {
        max-height: 600px;
        max-width: 353px;
    }
    
`;


const CloseButton = styled.span`
    position: absolute;
    top: -30px;
    right: 1px;
    font-size: 20px;
    cursor: pointer;
`;

const ClubnameModal = styled.text`

    position: absolute;
    top: -30px;
    left: 1px;
    font-size: 20px;
    font-weight: 600;
    color: white; /* 텍스트 색상은 이미지에 따라 조정할 수 있습니다. */
    
`

const Youtube = styled.iframe`
  width: 1080px;
  height: 600px;
  border: none;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;

export default Club;
