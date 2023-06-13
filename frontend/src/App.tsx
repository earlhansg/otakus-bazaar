import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
    <Typography  sx={{ fontFamily: 'Roboto' }}>
      <h1>Sample Test</h1>
    </Typography>
    </div>
  );
}

export default App;
