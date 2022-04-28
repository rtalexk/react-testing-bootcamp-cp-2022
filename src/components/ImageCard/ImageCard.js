import { Box, Card, Grid } from '@mui/material';
import Image from '../Image';
import ImageDetails from '../ImageDetails';

export default ImageCard;

function ImageCard({ error, media }) {
  if (error) {
    return (
      <div>
        <h6>
          Error
        </h6>

        <p>
          {error.msg}
        </p>
      </div>
    );
  }

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
    <Box maxWidth={920} mx="auto" p={4}>
      <Card>
        <Grid container>
          <Grid item md={6} display="flex" alignItems="center">
            <Image alt={title} src={url} />
          </Grid>
          <Grid item md={6}>
            <ImageDetails body={explanation} timestamp={date} title={title} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
