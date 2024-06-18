import { styled } from "styled-components";
import search from "../../assets/search.png";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 566px;
`;

const StyledInputText = styled.input`
  height: 56px;
  padding: 12px 50px 12px 16px;
  border-radius: 10px;
  border: 2px solid #c98cf1;
  background: transparent;
  width: 100%;
  box-sizing: border-box;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    height: 48px;
    padding: 10px 40px 10px 14px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    height: 40px;
    padding: 8px 35px 8px 12px;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 16px;
  width: 38px;
  height: 38px;

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    right: 14px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    right: 12px;
  }
`;

const InputText = ({ placeholder }) => {
  return (
    <StyledContainer>
      <StyledInputText placeholder={placeholder} />
      <SearchIcon src={search} alt="ícone de lupa" />
    </StyledContainer>
  );
};

export default InputText;
