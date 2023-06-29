import { TextFieldProps, TextField } from "@mui/material";

export type InputProps = {
  iName: string;
  iId: string;
  iLabel: string;
} & TextFieldProps;

const Input = ({ iName, iId, iLabel, ...textFieldProps }: InputProps) => {
  return (
    <>
      <TextField {...textFieldProps} />
    </>
  );
};

export default Input;
