import { TextFieldProps, TextField } from "@mui/material";
import { validations } from "./utils/inputValidations";
import { useFormContext } from "react-hook-form";

export type InputProps = {
  iName?: string;
  iId?: string;
  iLabel?: string;
  name: string;
  label: string;
} & TextFieldProps;

const Input = ({ iName, iId, iLabel, name, label, ...textFieldProps }: InputProps) => {
  const inputValidation = validations.find((list) => list.name === name);
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <TextField {...textFieldProps} {...register("email", inputValidation?.validation)}/>
    </>
  );
};

export default Input;
