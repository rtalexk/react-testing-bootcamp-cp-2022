import { CardMedia } from "@mui/material";

export default Image;

function Image({ alt, src }) {
  if (!src) {
    return null;
  }

  return (
    <CardMedia
      component="img"
      alt={alt}
      image={src}
    />
  );
}
