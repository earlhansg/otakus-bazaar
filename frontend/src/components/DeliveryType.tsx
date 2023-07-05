import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import LocalShippingOutlined from "@mui/icons-material/LocalShippingOutlined";
import HailOutlined from "@mui/icons-material/HailOutlined";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "./utils/formValues";

type delivery = {
  type: "ship" | "pickup";
};

const DeliveryMethod = ({ type }: delivery) => {
  return (
    <Stack flexDirection={"row"} justifyContent={"center"}>
      {type === "ship" ? <LocalShippingOutlined /> : <HailOutlined />}
      <Typography ml={1}>{type === "ship" ? "Ship" : "Pickup"}</Typography>
    </Stack>
  );
};

const DeliveryType = ({ control }: { control: Control<FormValues> }) => {
  return (
    <>
      <Controller
        control={control}
        name="deliveryType"
        render={({ field }) => (
          <RadioGroup {...field}>
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
              label={<DeliveryMethod type="ship" />}
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
              label={<DeliveryMethod type="pickup" />}
            />
          </RadioGroup>
        )}
      />
    </>
  );
};

export default DeliveryType;
