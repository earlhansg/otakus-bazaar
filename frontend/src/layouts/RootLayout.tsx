import { ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ItemLIst from '../components/ItemLIst';
import { Box } from '@mui/material';
import Cart from '../components/Cart';
import { theme } from '../components/utils/theme';

const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ fontFamily: 'Roboto' }}>
        <Header/>
        <SubHeader/>
        <ItemLIst/>
        <Cart/>
      </Box>
    </ThemeProvider>
  )
}

export default RootLayout
