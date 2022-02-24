import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: {
    category: null,
    season: null,
    team: null,
    search: null,
  },
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => ({
      ...state,
      value: {
        ...state.value,
        category: action.payload,
      },
    }),
    setSeason: (state, action) => ({
      ...state,
      value: {
        ...state.value,
        season: action.payload,
      },
    }),
    setTeam: (state, action) => ({
      ...state,
      value: {
        ...state.value,
        team: action.payload,
      },
    }),
    setSearch: (state, action) => ({
      ...state,
      value: {
        ...state.value,
        search: action.payload,
      },
    }),
    clear: (state) => ({
      ...state,
      ...initialState,
    }),
  },
})

export const { setCategory, setSeason, setTeam, setSearch, clear } =
  filterSlice.actions

export const selectFilters = (state) => state.filter.value

export default filterSlice.reducer
