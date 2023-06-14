import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const pages = ['Limited', 'Accesories', 'Shop All'];

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar sx={{ marginLeft: {lg:'15rem', md:'3rem', xs:'0'}, marginRight:{lg:'15rem', md:'3rem', xs:'0'} }}>
            <Typography variant="h6" component="a" sx={{ width: {md:'30%', xs:'90%'}, display:'flex', justifyContent: "flex-start"}}>
                Otaku
            </Typography>
            <Box sx={{ display:{md:'flex', xs:'none'}, width:'28%', justifyContent:'space-between', marginRight: 'auto' }}>
                {
                    pages.map((page) => (
                        <Typography key={page} component="a" sx={{ fontSize:'16px', fontWeight: 500, lineHeight: '2.1' }}>{page}</Typography>
                    ))
                }
            </Box>
            <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
