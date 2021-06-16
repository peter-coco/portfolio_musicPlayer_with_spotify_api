

import styled from "styled-components";

import {FooterMusicInfor} from "./footer-musicInfor";
import {FooterOperations} from "./footer-operations";

const FooterWrap = styled.div`
    width : 100%;
    height : 80px;
    position : absolute;
    bottom : 0;
    background-color : #000;
`;




export function Footer(){
    return (
        <FooterWrap>
            <FooterMusicInfor />
            <FooterOperations />
        </FooterWrap>
    )

}