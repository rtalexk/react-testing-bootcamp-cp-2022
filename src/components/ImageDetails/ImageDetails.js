
export default ImageDetails;

function ImageDetails({ title, timestamp, body }) {
  if (!title || !body) {
    return null;
  }
  
  return (
    <article>
      <h1>{title}</h1>
      { Boolean(timestamp) && <span>{timestamp}</span>}
      <p role="definition">{body}</p>
    </article>
  );
}
