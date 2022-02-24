import React from "react"
import PropTypes from "prop-types"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"

function SelectField({
  name,
  value,
  onChange,
  options,
  valueAttribute,
  labelAttribute,
  ...props
}) {
  return (
    <TextField
      id={name}
      name={name}
      value={value || ""}
      select
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      InputProps={{
        id: `input-${name}`,
      }}
      {...props}
    >
      <MenuItem value={null}>None</MenuItem>
      {options.map((option) => (
        <MenuItem key={option[valueAttribute]} value={option[valueAttribute]}>
          {option[labelAttribute]}
        </MenuItem>
      ))}
    </TextField>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  valueAttribute: PropTypes.string.isRequired,
  labelAttribute: PropTypes.string.isRequired,
}

SelectField.defaultProps = {
  value: "",
}

export default SelectField
