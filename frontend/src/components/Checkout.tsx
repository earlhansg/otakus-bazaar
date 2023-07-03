import {
  Avatar,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Stack, Typography, Button } from "@mui/material";
import Paypal from "../images/checkout/paypal.png";
import Mastercard from "../images/checkout/mastercard.png";
import Btc from "../images/checkout/btc.png";
import InputContainer from "./InputContainer";
import DeliveryType from "./DeliveryType";
import { Divider } from "@mui/material";

const countries = [
  {
    id: 1,
    name: "Philippines",
  },
];

const Checkout = () => {
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        m={5}
        sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
      >
        <Stack m={2} sx={{ width: "60%" }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
              color: (theme) => theme.palette.secondary.light,
            }}
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
          <Divider
            flexItem
            sx={{
              mt: 1,
              mb: 2,
              color: (theme) => theme.palette.secondary.light,
              fontSize: "14px",
              fontFamily: "Roboto",
            }}
          >
            OR
          </Divider>
          <Stack mt={2}>
            <Stack flexDirection={"row"}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  flexGrow: 1,
                  mb: 1,
                  fontSize: "16px",
                }}
                component="h4"
              >
                Contact
              </Typography>
              <Stack flexDirection={"row"}>
                <Typography sx={{ mr: 1, fontSize: "14px" }} component="h4">
                  Already have an account?
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", textDecoration: "underline" }}
                  component="h4"
                >
                  Log in
                </Typography>
              </Stack>
            </Stack>

            <InputContainer
              type="textfield"
              multiple={false}
              values={{
                iName: "name",
                iLabel: "name",
                iId: "name",
                id: "outlined-basic",
                label: "Email",
                variant: "outlined",
              }}
            />
          </Stack>

          <Stack ml={0}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography sx={{ fontSize: "14px" }}>
                  Email me with news and offers
                </Typography>
              }
            />
          </Stack>

          <Stack mt={2}>
            <Typography component="h4" mb={1} sx={{ fontSize: "16px" }}>
              Delivery method
            </Typography>
            <DeliveryType />
          </Stack>

          <Stack mt={2} mb={1}>
            <Typography sx={{ fontSize: "16px", mb: 2 }} component="h4">
              Shopping Address
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Counrty/Region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countries[0].id}    
              >
                {countries.map((country) => {
                  return <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Stack>

          <Stack
            mt={1}
            mb={1}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <InputContainer
              type="textfield"
              multiple={true}
              values={{
                iName: "firstname",
                iLabel: "firstname",
                iId: "firstname",
                id: "outlined-basic",
                label: "Firstname",
                variant: "outlined",
                sx: { width: "49%" },
              }}
            />
            <InputContainer
              type="textfield"
              multiple={true}
              values={{
                iName: "lastname",
                iLabel: "lastname",
                iId: "lastname",
                id: "outlined-basic",
                label: "Lastname",
                variant: "outlined",
                sx: { width: "49%" },
              }}
            />
          </Stack>

          <InputContainer
            mt={1}
            mb={1}
            type="textfield"
            multiple={false}
            values={{
              iName: "company",
              iLabel: "company",
              iId: "company",
              id: "outlined-basic",
              label: "Company (optional)",
              variant: "outlined",
            }}
          />

          <InputContainer
            mt={1}
            mb={1}
            type="textfield"
            multiple={false}
            values={{
              iName: "address",
              iLabel: "address",
              iId: "address",
              id: "outlined-basic",
              label: "Address",
              variant: "outlined",
            }}
          />

          <InputContainer
            mt={1}
            mb={1}
            type="textfield"
            multiple={false}
            values={{
              iName: "apartment",
              iLabel: "apartment",
              iId: "apartment",
              id: "outlined-basic",
              label: "Apartment, suite, etc. (optional)",
              variant: "outlined",
            }}
          />

          <Stack
            mt={1}
            mb={1}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <InputContainer
              type="textfield"
              multiple={true}
              values={{
                iName: "city",
                iLabel: "city",
                iId: "city",
                id: "outlined-basic",
                label: "City",
                variant: "outlined",
                sx: { width: "32%" },
              }}
            />
            <InputContainer
              type="textfield"
              multiple={true}
              values={{
                iName: "state",
                iLabel: "state",
                iId: "state",
                id: "outlined-basic",
                label: "State",
                variant: "outlined",
                sx: { width: "32%" },
              }}
            />
            <InputContainer
              type="textfield"
              multiple={true}
              values={{
                iName: "zipcode",
                iLabel: "zipcode",
                iId: "zipcode",
                id: "outlined-basic",
                label: "Zip Code",
                variant: "outlined",
                sx: { width: "32%" },
              }}
            />
          </Stack>
          <InputContainer
            mt={1}
            mb={1}
            type="textfield"
            multiple={true}
            values={{
              iName: "phone",
              iLabel: "phone",
              iId: "phone",
              id: "outlined-basic",
              label: "Phone",
              variant: "outlined",
            }}
          />
          <Button variant="contained" sx={{ mt: 3, borderRadius: "0px", p: 2 }}>
            Checkout
          </Button>
        </Stack>
        {/* <Stack>
          <Typography sx={{}} component="h4">
            Otaku
          </Typography>
        </Stack> */}
      </Box>
      <Box sx={{ width: "50%", backgroundColor: "#F7F3EE" }}>UserDetails</Box>
    </Box>
  );
};

export default Checkout;
