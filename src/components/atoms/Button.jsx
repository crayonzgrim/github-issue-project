import React, { useMemo } from "react";
import {
  Box,
  CircularProgress,
  Button as MuiButton,
  buttonClasses as MuiButtonClasses,
  css,
  styled,
} from "@mui/material";

export const Button = styled(
  React.forwardRef((props, ref) => {
    /** Property */
    const { loading = false, startIcon, children, ...others } = props;

    /** Function */

    const StartIcon = useMemo(() => {
      if (loading) {
        return (
          <Box>
            <CircularProgress size={14} color={"inherit"} />
          </Box>
        );
      }

      return startIcon ?? null;
    }, [loading, startIcon]);

    /** Render */
    return (
      <MuiButton {...others} ref={ref} startIcon={StartIcon}>
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
