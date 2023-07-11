import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Stack, Typography, Button } from "@mui/material";
import Paypal from "../images/checkout/paypal.png";
import Mastercard from "../images/checkout/mastercard.png";
import Btc from "../images/checkout/btc.png";
import InputContainer from "./InputContainer";
import DeliveryType from "./DeliveryType";
import { Divider } from "@mui/material";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { countries, formValues } from "./utils/formValues";
import {
  addressValidation,
  cityValidation,
  emailValidation,
  firstnameValidation,
  lastnameValidation,
  phoneValidation,
  stateValidation,
  zipcodeValidation,
} from "./utils/inputValidations";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { findProductImage } from "./utils/findProductImage";

const Checkout = () => {
  const methods = useForm({ defaultValues: formValues });
  const { control } = methods;

  const cartItemList = useSelector((state: RootState) => state.cart.itemsList);
  const dispatch = useDispatch();
  let total = 0;
  cartItemList.map(({ totalPrice }) => (total += totalPrice));

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    // setSuccess(true)
  });

  return (
    <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}>
      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          display: "flex",
          justifyContent: { md: "flex-end", xs: "center" },
          margin: { md: 5, xs: 0 },
        }}
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
          <FormProvider {...methods}>
            <form onSubmit={(e) => e.preventDefault()} noValidate>
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
                    name: "email",
                    id: "email",
                    label: "Email",
                    placeholder: "Email",
                    variant: "outlined",
                    ...emailValidation,
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
                <DeliveryType control={control} />
              </Stack>

              <Stack mt={2} mb={1}>
                <Typography sx={{ fontSize: "16px", mb: 2 }} component="h4">
                  Shopping Address
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Counrty/Region
                  </InputLabel>
                  <Controller
                    name="country"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={field.value}
                      >
                        {countries.map((country) => {
                          return (
                            <MenuItem key={country.id} value={country.id}>
                              {country.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    )}
                  />
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
                    name: "firstname",
                    id: "firstname",
                    label: "Firstname",
                    placeholder: "Firstname",
                    variant: "outlined",
                    sx: { width: "49%" },
                    ...firstnameValidation,
                  }}
                />
                <InputContainer
                  type="textfield"
                  multiple={true}
                  values={{
                    name: "lastname",
                    id: "lastname",
                    label: "Lastname",
                    placeholder: "Lastname",
                    variant: "outlined",
                    sx: { width: "49%" },
                    ...lastnameValidation,
                  }}
                />
              </Stack>

              <InputContainer
                mt={1}
                mb={1}
                type="textfield"
                multiple={false}
                values={{
                  name: "company",
                  id: "company",
                  label: "Company (optional)",
                  placeholder: "Company (optional)",
                  variant: "outlined",
                }}
              />

              <InputContainer
                mt={1}
                mb={1}
                type="textfield"
                multiple={false}
                values={{
                  name: "address",
                  id: "address",
                  label: "Address",
                  placeholder: "Address",
                  variant: "outlined",
                  ...addressValidation,
                }}
              />

              <InputContainer
                mt={1}
                mb={1}
                type="textfield"
                multiple={false}
                values={{
                  name: "apartment",
                  id: "apartment",
                  label: "Apartment, suite, etc. (optional)",
                  placeholder: "Apartment, suite, etc. (optional)",
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
                    name: "city",
                    id: "city",
                    label: "City",
                    placeholder: "City",
                    variant: "outlined",
                    sx: { width: "32%" },
                    ...cityValidation,
                  }}
                />
                <InputContainer
                  type="textfield"
                  multiple={true}
                  values={{
                    name: "state",
                    id: "state",
                    label: "State",
                    placeholder: "State",
                    variant: "outlined",
                    sx: { width: "32%" },
                    ...stateValidation,
                  }}
                />
                <InputContainer
                  type="textfield"
                  multiple={true}
                  values={{
                    name: "zipcode",
                    id: "zipcode",
                    label: "Zip Code",
                    placeholder: "Zip Code",
                    variant: "outlined",
                    sx: { width: "32%" },
                    ...zipcodeValidation,
                  }}
                />
              </Stack>
              <InputContainer
                mt={1}
                mb={1}
                type="textfield"
                multiple={false}
                values={{
                  name: "phone",
                  id: "phone",
                  label: "Phone",
                  placeholder: "Phone",
                  variant: "outlined",
                  ...phoneValidation,
                }}
              />
              <Button
                onClick={onSubmit}
                variant="contained"
                sx={{ mt: 3, borderRadius: "0px", p: 2, width: "100%" }}
              >
                Checkout
              </Button>
            </form>
          </FormProvider>
        </Stack>
      </Box>
      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          backgroundColor: "#F7F3EE",
          display: "flex",
          flexDirection: { xs: "column" },
          justifyContent: { md: "start" },
          alignItems: { md: "start", xs: "center" },
        }}
      >
        <Stack sx={{ width: { md: "50%", xs: "100%" } }} mt={5} ml={5}>
          {cartItemList.map((item) => (
            <Stack flexDirection={"row"} mt={2}>
              <Stack justifyContent={"center"}>
                <Badge badgeContent={item.quantity} color="primary">
                  <img
                    src={findProductImage(item.imagePath)}
                    alt={item.name}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "10px" }}
                  />
                </Badge>
              </Stack>
              <Stack sx={{ m: "1rem" }} m={2}>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontSize: "14px", fontWeight: 400 }}
                >
                  {item.name}
                </Typography>
              </Stack>
              <Stack sx={{ width: "55%" }} mr={1} justifyContent={"center"}>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontSize: "15px",
                    fontWeight: 400,
                    alignSelf: "end",
                  }}
                >
                  ${item.totalPrice.toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack
          flexDirection={"row"}
          sx={{ width: "50%", gap: "10px" }}
          mt={2}
          ml={5}
        >
          <TextField
            sx={{ flexGrow: 1, backgroundColor: "white" }}
            label="Discount Code"
            variant="outlined"
          />
          <Button variant="contained">Apply</Button>
        </Stack>
        <Stack sx={{ width: "50%", gap: "5px" }} mt={3} ml={5}>
          <Stack flexDirection={"row"}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                flexGrow: 1,
              }}
            >
              Subtotal
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              ${total.toLocaleString()}
            </Typography>
          </Stack>
          <Stack flexDirection={"row"}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                flexGrow: 1,
              }}
            >
              Shipping
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              $90
            </Typography>
          </Stack>
          <Stack flexDirection={"row"}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "17px",
                fontWeight: 400,
                flexGrow: 1,
              }}
            >
              Total
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "17px",
                fontWeight: 400,
              }}
            >
              ${Number(total + 90).toLocaleString()}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <DevTool control={control} />
    </Box>
  );
};

export default Checkout;
