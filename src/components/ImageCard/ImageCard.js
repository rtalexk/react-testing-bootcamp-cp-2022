import Image from '../Image';
import ImageDetails from '../ImageDetails';

export default ImageCard;

function ImageCard({ media }) {
  // Loading
  if (!media) {
    return null;
  }

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
