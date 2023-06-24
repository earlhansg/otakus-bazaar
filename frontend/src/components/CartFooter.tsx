import React from 'react'
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ButtonGroup, IconButton, Stack, Typography, Button } from "@mui/material";

const CartFooter = () => {
  return (
    <Box sx={{backgroundColor:"#f7f3ee"}}>
        <Stack>
          <Stack p={1}>
              <Typography sx={{ color: (theme) => theme.palette.primary.dark, fontSize: "15px", m: 2, textAlign:"center", fontWeight:"400"}} component="h4">
                Your order ships for free!
              </Typography>
              <Divider sx={{width: "90%", alignSelf:"center", backgroundColor:"#143a47", height:"3px"}}/>
              <Typography component="p" sx={{ fontSize: "12px", mr: 3, mt: 1, textAlign:"right", fontWeight:"500" }}>
                free shipping
              </Typography>
          </Stack>
          <Stack p={1} direction="row" sx={{borderTop:"1px solid #acacac"}}>
              <Typography component="p" sx={{ fontSize: "16px", flexGrow: 1, margin:"1em 1.5em" }}>
                Shipping
              </Typography>
              <Typography component="p" sx={{ color: (theme) => theme.palette.secondary.dark, fontSize: "14px", margin:"1em 1.5em" }}>
                FREE
              </Typography>
          </Stack>
          <Stack p={1} sx={{borderTop:"1px solid #acacac"}}>
            <Stack direction="row">
              <Typography component="h6" variant="h6" sx={{ flexGrow: 1, margin:"1em 1.5em 0 1.5em", fontSize: "17px" }}>
                Subtotal
              </Typography>
              <Typography component="h6" variant="h6" sx={{ margin:"1em 1.5em 0 1.5em", fontSize: "17px" }}>
                $3,291.00
              </Typography>
            </Stack>
            <Button variant="contained" sx={{ mt: 3, borderRadius:"0px", p: 2 }}>
                Add to Cart
            </Button>
          </Stack>
        </Stack>
    </Box>
  )
}

export default CartFooter
