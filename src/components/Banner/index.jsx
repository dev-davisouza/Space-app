import { styled } from "styled-components";

const StyledBanner = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const StyledTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

const Banner = ({ text, backgroundImage }) => {
  return (
    <StyledBanner $backgroundImage={backgroundImage}>
      <StyledTitle>{text}</StyledTitle>
    </StyledBanner>
  );
};

export default Banner;
