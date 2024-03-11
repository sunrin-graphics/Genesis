import styled from "styled-components";
import LeftArrowIconBlack from "../assets/LeftArrowIconBlack";

import Vfriends from "../assets/clubs/Vfriends.svg";
import Mir from "../assets/clubs/Mir.svg";
import Aune from "../assets/clubs/Aune.svg";
import Tate from "../assets/clubs/Tate.svg";
import Creal from "../assets/clubs/Creal.svg";
import Tapie from "../assets/clubs/Tapie.svg";
import Januri from "../assets/clubs/Januri.svg";

import Clubframe from "../components/Clubframe";
import clubList, { ClubList } from "../data/clubdata";
import { useNavigate } from "react-router-dom";

function Clubs() {
  const navigate = useNavigate();
  const clubData: ClubList = clubList;

  return (
    <Container>
      <Containerin>
      <ClubContainerTitleBox>
        <ClubContainerTitle>동아리 목록</ClubContainerTitle>
      </ClubContainerTitleBox>
      <ClubContainer>
        <ClubTitleBox>
          <ClubTitle>시연회에 함께한 동아리들을 알아보세요!</ClubTitle>
        </ClubTitleBox>
        
        {clubData.map((club) => (
                <>
                  <div
                    key={club.id}
                    onClick={() => {
                      navigate(`/club/${club.id}`);
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    <Clubframe
                      name={club.name}
                      department={club.department}
                      shortdesc={club.shortdesc}
                      logo={club.logo}
                    />
                  </div>
                </>
              ))}
      </ClubContainer>
      </Containerin>
    </Container>
  );
}

export default Clubs;


const ClubImage = styled.image`
  width: 122px;
`

const Container = styled.div`
  padding-top: 150px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding-top: 112px;
  }
  
`

const Containerin = styled.div`
  margin: 0 auto;
  width: 1040px;
  @media screen and (max-width: 1080px) {
    width: 100%;
    padding: 0px 20px 0px 20px;
  }

`;

const ClubContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 76px 55px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }


`;

const ClubBox = styled.div`
  background-color: white;
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

const ClubContentTitle = styled.h1`
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
  border-bottom: 1px solid black;
  display: flex;
  justify-content: end;
  padding: 13px 0;
`;

const ClubInfoBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;

const ClubTitleBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  position: relative;
  @media screen and (max-width: 1080px) {
    display: none;
  }

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
  @media screen and (max-width: 1080px) {
    font-size: 24px;
  }

`;
