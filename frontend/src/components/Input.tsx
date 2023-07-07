import { TextFieldProps, TextField, Badge } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { findInputError } from "./utils/findInputErrors";
import { isFormInvalid } from "./utils/isFormValid";
import InputError from "./InputError";

export type InputProps = {
  name: string;
  label: string;
  validation?: object;
  multiple?: boolean;
} & TextFieldProps;

const Input = ({
  name,
  label,
  validation,
  multiple,
  ...textFieldProps
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isValid = isFormInvalid(inputErrors);

  return (
    <>
      <TextField {...textFieldProps} {...register(name, validation)} />
      {isValid &&
        (!multiple ? (
          <InputError message={inputErrors.error.message} />
        ) : (
          <InputError message={inputErrors.error.message}>
            <Badge
              sx={{ top: "-6px", left: "-3px" }}
              overlap="circular"
              badgeContent=" "
              variant="dot"
              color="error"
            ></Badge>
          </InputError>
        ))}
    </>
  );
};

export default Input;
