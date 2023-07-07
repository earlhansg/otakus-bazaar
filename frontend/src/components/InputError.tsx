import { Stack, Alert, BadgeProps } from "@mui/material";

const InputError = ({
  message,
  children,
}: {
  message: string;
  children?: BadgeProps;
}) => {
  return (
    <>
      {!children && (
        <Stack sx={{ width: "100%" }} spacing={2} mt={1}>
          <Alert variant="outlined" severity="error">
            {message}
          </Alert>
        </Stack>
      )}
      {children}
    </>
  );
};

export default InputError;
