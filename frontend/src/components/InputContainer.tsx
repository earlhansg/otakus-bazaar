import { StackProps } from "@mui/material";
import { Stack } from "@mui/material";
import Input, { InputProps } from "./Input";

type InputContainerProps = {
  type: string;
  values: InputProps;
  multiple?: boolean;
} & StackProps;

const InputContainer = ({
  type,
  values,
  multiple,
  ...props
}: InputContainerProps) => {
  return (
    <>
      {!multiple && (
        <Stack {...props}>
          <Input {...values} />
        </Stack>
      )}
      {multiple && <Input {...values} />}
    </>
  );
};

export default InputContainer;
