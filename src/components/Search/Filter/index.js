import React, { useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectCategories } from "store/category/slice"
import { selectSeasons } from "store/season/slice"
import { selectTeams } from "store/team/slice"
import {
  selectFilters,
  setCategory,
  setSeason,
  setTeam,
  setSearch,
  clear,
} from "store/filter/slice"
import Grid from "@mui/material/Grid"
import InputAdornment from "@mui/material/InputAdornment"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import SelectField from "components/core/SelectField"
import TextField from "components/core/TextField"
import Button from "@mui/material/Button"

function Filter() {
  const { category, season, team, search } = useSelector(selectFilters)
  const categories = useSelector(selectCategories)
  const seasons = useSelector(selectSeasons)
  const teams = useSelector(selectTeams)
  const dispatch = useDispatch()

  const hasAnyFilter = useMemo(
    () => category || season || team || search,
    [category, season, team, search]
  )

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={2}>
        <SelectField
          name="category"
          label="Category"
          value={category}
          onChange={(value) => dispatch(setCategory(value))}
          options={categories}
          labelAttribute="name"
          valueAttribute="id"
        />
      </Grid>
      <Grid item xs={4} md={2}>
        <SelectField
          name="season"
          label="Season"
          value={season}
          onChange={(value) => dispatch(setSeason(value))}
          options={seasons}
          labelAttribute="name"
          valueAttribute="id"
        />
      </Grid>
      <Grid item xs={4} md={2}>
        <SelectField
          name="team"
          label="Team"
          value={team}
          onChange={(value) => dispatch(setTeam(value))}
          options={teams}
          labelAttribute="name"
          valueAttribute="id"
        />
      </Grid>
      <Grid item xs={8} md={4}>
        <TextField
          name="search"
          label="Search"
          value={search}
          onChange={(value) => dispatch(setSearch(value))}
          placeholder="Search by the album's name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={4}
        md={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button disabled={!hasAnyFilter} onClick={() => dispatch(clear())}>
          Clear all
        </Button>
      </Grid>
    </Grid>
  )
}

export default Filter
