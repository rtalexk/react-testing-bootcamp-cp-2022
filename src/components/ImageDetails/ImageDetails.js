import { CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default ImageDetails;

function ImageDetails({ title, timestamp, body }) {
  if (!title || !body) {
    return null;
  }

  return (
    <CardContent>
      <Box mb={2}>
        <Typography variant="h5">
          {title}
        </Typography>
        {Boolean(timestamp) && (
          <Typography variant="caption">
            {timestamp}
          </Typography>
        )}
      </Box>

      <Box role="definition">
        {body.split(/\s{2,}/).map((p, i) => (
          <Typography key={i} variant="body1" mt={1}>
            {p}
          </Typography>
        ))}
      </Box>
    </CardContent>
  );
}
