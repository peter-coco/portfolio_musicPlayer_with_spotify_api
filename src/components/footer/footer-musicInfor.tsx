
import styled from "styled-components";
import musicImg from "../../image/navbar-logo.png"

const MusicInforWrap = styled.div`
    display : flex;
    width : 415px;
    height : 60px;
    margin : 0 auto;
`;

const MusicInforImage = styled.img`
    margin-right : 40px;
    width : 60px;
    height : 60px;
`;

const MusicInforText = styled.div`
    display : flex;
    flex-direction : column;
`;

const MusicInforTextTitle = styled.div`
    color : #fff;
    font-size : 24px;

`;

const MusicInforTextEtc = styled.div`
    color : #cacaca;
    font-size : 24px;
    
`;

export function FooterMusicInfor(){


    return (
        <MusicInforWrap>
            <MusicInforImage src = {musicImg}/>
            <MusicInforText>
                <MusicInforTextTitle>Yellow</MusicInforTextTitle> 
                <MusicInforTextEtc>ColdPlay / parachtes</MusicInforTextEtc>
            </MusicInforText>
        </MusicInforWrap>
    )
}