import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { clear } from "store/filter/slice"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Row from "./Row"

function Result({ rows }) {
  const dispatch = useDispatch()

  return (
    <TableContainer sx={{ marginTop: 5 }} component={Paper}>
      <Table>
        <colgroup>
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "40%" }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="right">Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.length ? (
            rows.map((row) => <Row key={row.id} data={row} />)
          ) : (
            <TableRow role="row">
              <TableCell colSpan={4} align="center">
                <Typography component="p" sx={{ marginBottom: "10px" }}>
                  No results, you could
                </Typography>
                <Button onClick={() => dispatch(clear())}>
                  clear all filter
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Result.propTypes = {
  rows: PropTypes.array,
}

Result.defaultProps = {
  rows: [],
}

export default Result
