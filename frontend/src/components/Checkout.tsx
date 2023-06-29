import {
  Avatar,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { Stack, Typography, Button } from "@mui/material";
import Paypal from "../images/checkout/paypal.png";
import Mastercard from "../images/checkout/mastercard.png";
import Btc from "../images/checkout/btc.png";
import LocalShippingOutlined from "@mui/icons-material/LocalShippingOutlined";

const DeliveryMethod = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"center"}>
      <LocalShippingOutlined />
      <Typography ml={1}>Pickup</Typography>
    </Stack>
  );
};


const Checkout = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
          <Stack flexDirection={"row"} justifyContent={"space-evenly"} mt={2}>
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
          <Stack mt={2}>
            <Stack flexDirection={"row"}>
              <Typography
                sx={{ display: "flex", justifyContent: "left", flexGrow: 1 }}
                component="h4"
              >
                Contact
              </Typography>
              <Stack flexDirection={"row"}>
                <Typography sx={{ mr: 1 }} component="h4">
                  Already have an account?
                </Typography>
                <Typography sx={{}} component="h4">
                  Log in
                </Typography>
              </Stack>
            </Stack>
            <TextField id="outlined-basic" label="Email" variant="outlined"/>
          </Stack>
          
          <Stack ml={0}>
            <FormControlLabel
              control={<Checkbox />}
              label="Email me with news and offers"
            />
          </Stack>
          <Stack mt={2}>
            <Typography component="h4" mb={1}>
              Delivery method
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="ship"
              name="radio-buttons-group"
            >
              <FormControlLabel
                sx={{
                  border: "1px solid #bfbfbf",
                  marginLeft: "1px",
                  width: "97%",
                  padding: "5px",
                  borderRadius: " 8px 8px 0px 0px",
                }}
                value="ship"
                control={<Radio />}
                label={<DeliveryMethod />}
              />
              <FormControlLabel
                sx={{
                  border: "1px solid #bfbfbf",
                  marginLeft: "1px",
                  width: "97%",
                  padding: "5px",
                  borderRadius: " 0px 0px 8px 8px",
                  borderTop: "none",
                }}
                value="pickup"
                control={<Radio />}
                label={<DeliveryMethod />}
              />
            </RadioGroup>
          </Stack>
          <Stack mt={2} mb={1}>
            <Typography sx={{}} component="h4">
              Shopping Address
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Counrty/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack mt={1} mb={1} flexDirection={"row"} justifyContent={"space-between"}>
            <TextField
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              sx={{ width: "49%" }}
            />
            <TextField
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              sx={{ width: "49%" }}
            />
          </Stack>
          <Stack mt={1} mb={1}>
            <TextField
              id="outlined-basic"
              label="Company (optional)"
              variant="outlined"
            />
          </Stack>
          <Stack mt={1} mb={1}>
            <TextField id="outlined-basic" label="Address" variant="outlined" />
          </Stack>
          <Stack>
            <TextField
              id="outlined-basic"
              label="Apartment, suite, etc. (optional)"
              variant="outlined"
            />
          </Stack>
          <Stack mt={1} mb={1} flexDirection={"row"} justifyContent={"space-between"}>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              sx={{ width: "32%" }}
            />
            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              sx={{ width: "32%" }}
            />
            <TextField
              id="outlined-basic"
              label="ZIP code"
              variant="outlined"
              sx={{ width: "32%" }}
            />
          </Stack>
          <Stack mt={1} mb={1}>
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
          </Stack>

          <Button variant="contained" sx={{ mt: 3, borderRadius: "0px", p: 2 }}>
            Checkout
          </Button>
        </Stack>
        <Stack>
          <Typography sx={{}} component="h4">
            Otaku
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ width: "50%", backgroundColor: "#F7F3EE", height: "100vh" }}>
        UserDetails
      </Box>
    </Box>
  );
};

export default Checkout;
