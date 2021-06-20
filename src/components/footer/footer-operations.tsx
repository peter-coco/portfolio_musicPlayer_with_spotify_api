import styled from "styled-components";

const FooterOperationWrap = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    position: relative;
    left: -30px;
    width: 80px;
  }
`;

const Operations = styled.i`
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  @media (max-width: 750px) {
    font-size: 15px;
    margin-left: 20px;
    /* line-height: 30px; */
  }

  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

export function FooterOperations() {
  return (
    <FooterOperationWrap>
      <Operations className="fas fa-play" />
      <Operations className="fas fa-pause" />
      <Operations className="fas fa-thumbs-up" />
    </FooterOperationWrap>
  );
}
