import { useContext } from "react";
import { format } from "date-fns";
import { MediaDateContext } from "../../context/MediaDate";
import useNasaMedia from "../../hooks/useNasaMedia";
import ImageCard from "../ImageCard/ImageCard";

export default ImageCardContainer;

function ImageCardContainer() {
  const { date } = useContext(MediaDateContext);
  const media = useNasaMedia(format(date, 'yyyy-MM-dd'));

  return (
    <ImageCard media={media} />
  );
}
