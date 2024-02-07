// CustomButton.js
import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

const RedButton = styled(Button)`
  color: #58ba76;
  padding: 5px;
  font-size: 10px;
  background-color: #fbe360;
  :hover {
    background-color: #ffec80;
  }
`;

export default RedButton;
