import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import SubHeader from './components/SubHeader';

const theme = createTheme({
  palette: {
    primary: {
      light: '#43616b',
      main: '#143a47',
      dark: '#0e2831',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f7f7f7',
      main: '#f6f6f6',
      dark: '#acacac',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Typography  sx={{ fontFamily: 'Roboto' }} component="div">
        </Typography> */}
        <Header/>
        <SubHeader/>
      </div>
    </ThemeProvider>
  );
}

export default App;
