import { Avatar, Box } from "@mui/material";
import { Stack, Typography, Button } from "@mui/material";
import Paypal from "../images/checkout/paypal.png";
import Mastercard from "../images/checkout/mastercard.png";
import Btc from "../images/checkout/btc.png";

const Checkout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        m={5}
        sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
      >
        <Stack m={2} sx={{ width: "60%" }}>
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            component="h4"
          >
            Express Checkout
          </Typography>
          <Stack flexDirection={"row"} justifyContent={"center"} mt={2}>
            <Button>
              <Avatar alt="Paypal" src={Paypal} sx={{ width: 50 }} />
            </Button>
            <Button>
              <Avatar alt="Mastercard" src={Mastercard} sx={{ width: 50 }} />
            </Button>
            <Button>
              <Avatar alt="Bitcoin" src={Btc} sx={{ width: 50 }} />
            </Button>
          </Stack>
        </Stack>
        <Stack>
          <Typography sx={{}} component="h4">
            Otaku
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ width: "50%", backgroundColor:"#F7F3EE", height:"100vh" }}>UserDetails</Box>
    </Box>
  );
};

export default Checkout;
