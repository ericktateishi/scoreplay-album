import React from "react"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

function Loading() {
  return (
    <Box display="flex" marginTop={10} justifyContent="center">
      <CircularProgress />
    </Box>
  )
}

export default Loading
