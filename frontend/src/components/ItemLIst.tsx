import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import zorro from '../images/zorro.png'

export default function ItemLIst() {
  return (
    <Box mt="3" sx={{marginLeft: { lg: "15rem", xs:"0" },
    marginRight: { lg: "15rem", xs:"0"}}}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box>
            <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                <img src={zorro} alt="image" width="100%" height="100%"/>
            </Stack>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                First Collection
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                (209 Previews)
            </Typography>
            <Stack sx={{alignItems:'center'}}>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly sx={{color:"#43616b"}} />
            </Stack>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                $645.00
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
