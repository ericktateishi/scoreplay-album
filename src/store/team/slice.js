import { createSlice } from "@reduxjs/toolkit"
import TEAMS_MOCK from "test/mock/team"

const isTesting = process.env.NODE_ENV === "test"

const initialState = {
  data: isTesting ? TEAMS_MOCK : [],
}

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeams: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
})

export const { setTeams } = teamSlice.actions

export const selectTeams = (state) => state.team.data

export default teamSlice.reducer
