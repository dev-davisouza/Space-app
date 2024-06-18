import { styled } from "styled-components";
import IconButton from "../../IconButton";
import { Tag } from "../Tags";

const StyledFigure = styled.figure`
  position: relative;
  flex-grow: 1;
  width: ${(props) => (props.$expand ? "90%" : "auto")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = ({ photo, expand = false, onRequestedZoom, toggleFavorite }) => {
  const favoriteIcon = photo.favorite
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <StyledFigure
      $expand={expand}
      id={`photo-${photo.id}`}
      className="GalleryItem"
    >
      <Tag imgId={photo.tagId} expand={expand} />
      <img src={photo.path} alt={photo.title} />
      <figcaption>
        <h3>{photo.title}</h3>
        <Footer>
          <h4>{photo.font}</h4>
          <IconButton onClick={() => toggleFavorite(photo)}>
            <img src={favoriteIcon} alt="Icone de favorito" />
          </IconButton>
          {!expand && (
            <IconButton
              aria-hidden={expand}
              onClick={() => onRequestedZoom(photo)}
            >
              <img
                src="/icones/expandir.png"
                alt="Icone de expandir"
                onClick={ScrollToTop}
              />
            </IconButton>
          )}
        </Footer>
      </figcaption>
    </StyledFigure>
  );
};

function ScrollToTop() {
  window.scrollTo(0, 290);
  return null;
}

export default Image;
