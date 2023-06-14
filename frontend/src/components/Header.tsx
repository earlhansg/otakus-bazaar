import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar sx={{ marginLeft:'15rem', marginRight:'15rem' }}>
            <Typography variant="h6" component="a" sx={{ width: '30%', display:'flex', justifyContent: "flex-start"}}>
                Otaku
            </Typography>
            <Box sx={{ display:'flex', width: '28%', justifyContent:'space-between', marginRight: 'auto' }}>
                <Typography variant="h6" component="a">
                    Limited
                </Typography>
                <Typography variant="h6" component="a">
                    Accessories
                </Typography>
                <Typography variant="h6" component="a" sx={{  }}>
                    Shop All
                </Typography>
            </Box>
            <Typography variant="h6" component="a">
                Icon
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
