import { TextFieldProps, TextField } from "@mui/material";
import { validations } from "./utils/inputValidations";
import { useFormContext } from "react-hook-form";

export type InputProps = {
  name: string;
  label: string;
} & TextFieldProps;

const Input = ({ name, label, ...textFieldProps }: InputProps) => {
  const inputValidation = validations.find((list) => list.name === name);
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <TextField {...textFieldProps} {...register(name, inputValidation?.validation)}/>
    </>
  );
};

export default Input;
