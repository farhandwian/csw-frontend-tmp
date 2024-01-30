// CustomButton.js
import React from "react";

import { purple } from "@mui/material/colors";

import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import Button, { ButtonProps } from "@mui/material/Button";

const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

export default SubmitButton;
