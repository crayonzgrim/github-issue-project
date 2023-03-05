import React from "react";
import {
  Button as MuiButton,
  buttonClasses as MuiButtonClasses,
  css,
  styled,
} from "@mui/material";

export const Button = styled((props) => {
  /** Property */
  const { children, ...others } = props;

  /** Render */
  return <MuiButton {...others}>{children}</MuiButton>;
})(({ theme }) => {
  return css`
    &.${MuiButtonClasses.root} {
      text-transform: none;
    }
  `;
});
