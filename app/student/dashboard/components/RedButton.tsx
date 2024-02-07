// CustomButton.js
import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

const RedButton = styled(Button)`
  color: #f3736c;
  background-color: #f3736c;
  :hover {
    background-color: rgba(243, 115, 108, 0.8);
  }
`;

export default RedButton;
