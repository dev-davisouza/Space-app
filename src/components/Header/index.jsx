import styled from "styled-components";
import InputText from "../Input";
const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  img {
    max-width: 212px;
  }
`;

const StyledImage = styled.img`
  /*Logo have: 571 x 194 px*/
  @media (max-width: 768px) {
    width: calc(194px * 0.85);
  }

  @media (max-width: 480px) {
    width: calc(194px * 0.7);
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledImage src="/imagens/logo.png" alt="" />
      <InputText placeholder="Digite.." />
    </StyledHeader>
  );
}
