
import styled from "styled-components";

const FooterOperationWrap = styled.div`
    display : flex;
    width : 250px;
    height : 33px;
    position : absolute;
    right : 20px;
    top : 0px;
`;

const Operations = styled.i`
    width : 30px;
    height : 30px;
    color : #fff;
`;

export function FooterOperations(){


    return (
        <FooterOperationWrap>
            <Operations className = "fas fa-play" />
            <Operations className = "fas fa-pause" />
            <Operations className = "fas fa-thumbs-up" />
        </FooterOperationWrap>
    )
}


