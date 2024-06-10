import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Favorites = () => {
  const { photos } = useContext(PhotoContext);

  // Filtro
  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map((photo, index) => (
          <div key={index} className="photo" style={{backgroundImage: `url(${photo.src.tiny})`}} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
