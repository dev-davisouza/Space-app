import { styled } from "styled-components";
import Title from "../Title";
import photos from "../../fotos.json";

const PopularsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
`;

const PhotosColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 20px;
  flex-grow: 1;
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Populares = () => {
  return (
    <PopularsContainer className="Populars photos">
      <Title $align="center">Populars</Title>
      <PhotosColumn>
        {photos.slice(0, 4).map((photo) => (
          <StyledImage key={photo.id} src={photo.path} alt={photo.title} />
        ))}
        <StyledButton>See more</StyledButton>
      </PhotosColumn>
    </PopularsContainer>
  );
};

export default Populares;
