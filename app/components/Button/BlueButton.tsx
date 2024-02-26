import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const BlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

export default BlueButton;
