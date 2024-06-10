import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotoContext);

  const handleLikeClick = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index].liked = !updatedPhotos[index].liked;
    setPhotos(updatedPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((element, index) => (
        <div key={index} className="photo" style={{backgroundImage: `url(${element.src.tiny})`}}>
          <IconHeart filled={element.liked} onClick={() => handleLikeClick(index)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
