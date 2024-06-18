import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import BannerBg from "./assets/banner.png";
import Gallery from "./components/Gallery";
import photos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const BgGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 95%;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filteredImages, setFilteredImages] = useState(null);

  const toggleFavorite = (photo) => {
    // Atualiza a foto favoritada na lista principal
    const updatedGalleryPhotos = galleryPhotos.map((galleryPhoto) =>
      galleryPhoto.id === photo.id
        ? { ...galleryPhoto, favorite: !galleryPhoto.favorite }
        : galleryPhoto
    );

    // Atualiza a lista de fotos filtradas se houver um filtro aplicado
    const updatedFilteredImages =
      filteredImages !== null
        ? filteredImages.map((filteredPhoto) =>
            filteredPhoto.id === photo.id
              ? { ...filteredPhoto, favorite: !filteredPhoto.favorite }
              : filteredPhoto
          )
        : null;

    // Atualiza os estados
    setGalleryPhotos(updatedGalleryPhotos);
    if (updatedFilteredImages !== null) {
      setFilteredImages(updatedFilteredImages);
    }

    // Atualiza a foto selecionada se for a mesma que está sendo favoritada
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }
  };

  const onFilterImages = (tagId) => {
    console.log(filteredImages);

    tagId === 0
      ? setFilteredImages(null)
      : setFilteredImages(
          galleryPhotos.filter((galleryPhoto) => galleryPhoto.tagId === tagId)
        );
  };

  return (
    <BgGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Sidebar />
          <GalleryContent>
            <Banner
              backgroundImage={BannerBg}
              text="The most complete gallery of space photos!"
            />
            <Gallery
              onSelectedPhoto={(photo) => setSelectedPhoto(photo)}
              photos={filteredImages ? filteredImages : galleryPhotos}
              toggleFavorite={toggleFavorite}
              onFilterImages={onFilterImages}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        toggleFavorite={toggleFavorite}
      />
    </BgGradient>
  );
}

export default App;
