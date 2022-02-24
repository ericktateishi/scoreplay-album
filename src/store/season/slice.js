import { createSlice } from "@reduxjs/toolkit"
import SEASONS_MOCK from "test/mock/season"

const isTesting = process.env.NODE_ENV === "test"

const initialState = {
  data: isTesting ? SEASONS_MOCK : [],
}

export const seasonSlice = createSlice({
  name: "season",
  initialState,
  reducers: {
    setSeasons: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
})

export const { setSeasons } = seasonSlice.actions

export const selectSeasons = (state) => state.season.data

export default seasonSlice.reducer
