import styled from "styled-components";

const FooterOperationWrap = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Operations = styled.i`
  font-size: 20px;
  color: #fff;
  line-height: 30px;
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
