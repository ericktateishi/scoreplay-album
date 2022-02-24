import React from "react"
import PropTypes from "prop-types"
import MuiTextField from "@mui/material/TextField"

function TextField({ name, value, onChange, ...props }) {
  return (
    <MuiTextField
      id={name}
      name={name}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      {...props}
    />
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
}

TextField.defaultProps = {
  value: "",
}

export default TextField
