import React from "react";
import { Alert as MuiAlert, styled, css } from "@mui/material";

export const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
