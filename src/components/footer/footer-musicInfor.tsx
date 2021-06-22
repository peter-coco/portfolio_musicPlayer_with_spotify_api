import styled from "styled-components";
import musicImg from "../../image/navbar-logo.png";

const MusicInforWrap = styled.div`
  display: flex;
  width: 415px;
  height: 60px;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 750px) {
    left: -20px;
  }

  /* margin : 0 auto; */
`;

const MusicInforImage = styled.img`
  margin-right: 40px;
  width: 50px;
  height: 50px;

  @media (max-width: 750px) {
    margin-right: 20px;
    width: 30px;
    height: 30px;
  }
`;

const MusicInforText = styled.div`
  display: flex;
  flex-direction: column;
`;

const MusicInforTextTitle = styled.div`
  color: #fff;
  font-size: 20px;
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

const MusicInforTextEtc = styled.div`
  color: #cacaca;
  font-size: 20px;
  @media (max-width: 750px) {
    font-size: 12px;
  }
`;

export function FooterMusicInfor() {
  return (
    <MusicInforWrap>
      <MusicInforImage src={musicImg} />
      <MusicInforText>
        <MusicInforTextTitle>Yellow</MusicInforTextTitle>
        <MusicInforTextEtc>ColdPlay / parachtes</MusicInforTextEtc>
      </MusicInforText>
    </MusicInforWrap>
  );
}