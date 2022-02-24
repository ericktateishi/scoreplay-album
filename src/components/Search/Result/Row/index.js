import React, { useMemo } from "react"
import PropTypes from "prop-types"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

function Row({ data }) {
  const teams = useMemo(
    () => data.teams.map((team) => team.name).join(","),
    [data]
  )
  const tags = useMemo(
    () => (
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        {data.tags.map((tag) => (
          <Chip key={tag.id} label={tag.name} />
        ))}
      </Stack>
    ),
    [data]
  )

  return (
    <TableRow
      key={data.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      role="row"
    >
      <TableCell>{data.name}</TableCell>
      <TableCell align="center">{teams}</TableCell>
      <TableCell align="center">{data.date}</TableCell>
      <TableCell align="right">{tags}</TableCell>
    </TableRow>
  )
}

Row.propTypes = {
  data: PropTypes.object,
}

Row.defaultProps = {
  data: {},
}

export default Row
