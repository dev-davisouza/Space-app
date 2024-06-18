import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./populars";
import Image from "./Image";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

const FluidSection = styled.section`
  width: 70%;
  box-sizing: border-box;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({
  photos = [],
  onSelectedPhoto,
  toggleFavorite,
  onFilterImages,
}) => {
  return (
    <>
      <Tags onFilterImages={onFilterImages} />
      <GalleryContainer className="Container da Galeria">
        <FluidSection className="FluidSection">
          <Title>Browse the gallery</Title>
          <ImagesContainer className="Just Images">
            {photos.map((photo) => (
              <Image
                key={photo.id}
                photo={photo}
                onRequestedZoom={onSelectedPhoto}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </ImagesContainer>
        </FluidSection>
        <Populars />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
