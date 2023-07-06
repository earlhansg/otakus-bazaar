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
import { FormProvider, useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { countries, formValues } from "./utils/formValues";
import { addressValidation, cityValidation, emailValidation, firstnameValidation, lastnameValidation, phoneValidation, stateValidation, zipcodeValidation } from "./utils/inputValidations";


const Checkout = () => {
  const methods = useForm({ defaultValues: formValues });
  const { control } = methods;

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    // setSuccess(true)
  })

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
                    ...emailValidation
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
                  <Controller name="country" control={control} rules={{ required: true }} render={({field}) => (
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
                  )}/> 
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
                    ...firstnameValidation
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
                    ...lastnameValidation
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
                  ...addressValidation
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
                    ...cityValidation
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
                    ...stateValidation
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
                    ...zipcodeValidation
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
                  ...phoneValidation
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
        {/* <Stack>
          <Typography sx={{}} component="h4">
            Otaku
          </Typography>
        </Stack> */}
      </Box>
      <Box sx={{ width: "50%", backgroundColor: "#F7F3EE" }}>UserDetails</Box>
      <DevTool control={control} />
    </Box>
  );
};

export default Checkout;
