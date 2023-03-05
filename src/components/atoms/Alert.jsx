import React from "react";
import { Alert as MuiAlert, styled, css } from "@mui/material";

export const Alert = styled(({ ...others }) => {
  return <MuiAlert elevation={6} variant="filled" {...others} />;
})(({ theme }) => {
  return css``;
});
