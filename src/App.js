import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme/theme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>

  );
}

export default App;
