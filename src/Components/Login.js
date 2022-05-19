import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Email" variant="filled" />
      <br />
      <TextField id="standard-basic" label="Password" variant="filled" />
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="contained">Login</Button>
      </Stack>
    </Box>
  );
}