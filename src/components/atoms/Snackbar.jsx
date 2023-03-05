import React from "react";
import { Snackbar as MuiSnackbar, styled, css } from "@mui/material";
import { Alert } from "./Alert";

export const Snackbar = styled((props) => {
  /** Property */
  const { open, message = "", severity = "success", ...others } = props;

  /** Function */

  /** Render */
  return (
    <MuiSnackbar {...others} open={open}>
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message ?? ""}
      </Alert>
    </MuiSnackbar>
  );
})(({ theme }) => {
  return css``;
});
