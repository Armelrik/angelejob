import { Grid, ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme/theme';
import Header from './components/Header';
import SearBar from './components/SearchBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid px={10} container justify="center">
        <Grid item xs={10}>
          <SearBar />
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
