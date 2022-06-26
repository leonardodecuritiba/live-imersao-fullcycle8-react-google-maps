import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

export function Navbar() {
  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <DriveEtaIcon />
        </IconButton>
        <Typography variant="h6">Meu texto</Typography>
      </Toolbar>
    </AppBar>
  );
}
