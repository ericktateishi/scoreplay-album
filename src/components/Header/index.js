import React from "react"
import Box from "@mui/material/Box"

function Header() {
  return (
    <Box
      width="100%"
      height="80px"
      display="flex"
      padding="20px 0"
      justifyContent="center"
      marginBottom="20px"
      sx={{ backgroundColor: "rgb(241, 243, 244)" }}
    >
      <img src="header.png" alt="ScorePlay" />
    </Box>
  )
}

export default Header
