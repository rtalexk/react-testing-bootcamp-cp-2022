import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

export default Footer;

function Footer() {
  return (
    <Box
      bottom={0}
      component="footer"
      position="fixed"
      width="100%"
      borderTop='1px solid #efefef'
    >
      <Toolbar >
        <Box textAlign="center" width="100%">
          <Typography variant="subtitle1" component="p" fontWeight={300}>
            Project created during Wizeline Academy React Testing Bootcamp
          </Typography>
        </Box>
      </Toolbar>
    </Box>
  );
}
