import React from "react";
import {
  Button as MuiButton,
  buttonClasses as MuiButtonClasses,
  css,
  styled,
} from "@mui/material";

export const Button = styled(
  React.forwardRef((props, ref) => {
    /** Property */
    const { children, ...others } = props;

    /** Function *

    /** Render */
    return (
      <MuiButton {...others} ref={ref}>
        {children}
      </MuiButton>
    );
  })
)(({ theme }) => {
  return css`
    &.${MuiButtonClasses.root} {
      text-transform: none;
    }
  `;
});
