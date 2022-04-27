import Image from '../Image';
import ImageDetails from '../ImageDetails';

export default ImageCard;

function ImageCard({ media }) {
  const {
    date,
    explanation,
    title,
    url,
  } = media;

  return (
    <main>
      <Image alt={title} src={url} />
      <ImageDetails body={explanation} timestamp={date} title={title} />
    </main>
  );
}
