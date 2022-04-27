
export default Image;

function Image({ alt, src }) {
  if (!src) {
    return null;
  }

  return (
    <img alt={alt} src={src} />
  );
}
