import useNasaMedia from "../../hooks/useNasaMedia";
import ImageCard from "../ImageCard/ImageCard";

export default ImageCardContainer;

function ImageCardContainer() {
  const media = useNasaMedia('2022-04-27');

  return (
    <ImageCard media={media} />
  );
}
