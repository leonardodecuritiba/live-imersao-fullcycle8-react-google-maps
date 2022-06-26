import theme from './theme';
import {
  Select,
  MenuItem,
  Grid,
  CssBaseline,
  ThemeProvider,
  Button,
} from '@mui/material';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Grid container>
          <Grid item xs={12} sm={3}>
            <form>
              <Select fullWidth displayEmpty defaultValue={``}>
                <MenuItem value="">
                  <em>Selecione uma rota</em>
                </MenuItem>
                <MenuItem value="">Rota 1</MenuItem>
              </Select>
              <div style={{ textAlign: 'center', margin: theme.spacing(1) }}>
                <Button type="submit" variant="contained">
                  Iniciar rota
                </Button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} sm={9}></Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
