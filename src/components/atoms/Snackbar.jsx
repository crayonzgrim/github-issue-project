import React, { useState } from "react";
import {
  Snackbar as MuiSnackbar,
  Slide as MuiSlide,
  Alert as MuiAlert,
  styled,
  css,
} from "@mui/material";

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Snackbar = styled((props) => {
  /** Property */
  const { open, message = "", severity = "success", ...others } = props;

  /** Function */

  /** Render */
  return (
    <MuiSnackbar
      {...others}
      open={open}
      // autoHideDuration={6000}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message ?? ""}
      </Alert>
    </MuiSnackbar>
  );
})(({ theme }) => {
  return css``;
});
