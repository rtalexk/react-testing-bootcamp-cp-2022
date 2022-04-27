import { Box } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

export default Footer;

function Footer() {
  return (
    <AppBar color="default" component="footer" position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar >
        <Box textAlign="center" width="100%">
          <Typography variant="subtitle1" component="p" fontWeight={300}>
            Project created during Wizeline Academy React Testing Bootcamp
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
