import { Box } from "@mui/material";
import LogoImg from "../../assets/sb_logo.svg";

export function Header() {
  return (
    <Box display="flex" justifyContent="center">
      <img src={LogoImg} alt="Logo" />
    </Box>
  );
}
