import { TextFieldProps, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export type InputProps = {
  name: string;
  label: string;
  validation?: object;
} & TextFieldProps;

const Input = ({ name, label, validation, ...textFieldProps }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <TextField {...textFieldProps} {...register(name, validation)}/>
    </>
  );
};

export default Input;
