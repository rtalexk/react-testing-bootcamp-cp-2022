import { Box, Card, Grid, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import Image from '../Image';
import ImageDetails from '../ImageDetails';

export default ImageCard;

function ImageCard({ error, media }) {
  if (error) {
    return (
      <Box display="flex" mt={8} justifyContent="center">
        <Typography sx={visuallyHidden} variant="h5">
          Error
        </Typography>

        <Typography color="crimson" variant="h6" component="p">
          {error.msg}
        </Typography>
      </Box>
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
