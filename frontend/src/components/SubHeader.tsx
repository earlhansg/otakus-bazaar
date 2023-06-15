import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function SubHeader() {
  return (
    <Box sx={{ flexGrow: 1, margin: '2rem', color: '#2c2e2f' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
            <Typography variant="h4" sx={{fontWeight:'500', letterSpacing:'1px'}} gutterBottom>
                Shop
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
            <Typography variant="subtitle1" sx={{display:'flex', maxWidth:'40%', letterSpacing:'1px'}} gutterBottom>
                You want options? We’ve got options. From the luxe Ratio Eight and its conical physique to the no-nonsense Six, there’s a Ratio that matches your taste and temperament. Slow drinker? Add a thermal carafe. You want the form of the Six with the carafe of the Eight? Do it. Here’s everything you could ever want. 
            </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
