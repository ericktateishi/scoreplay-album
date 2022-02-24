import { createSlice } from "@reduxjs/toolkit"
import ALBUMS_MOCK from "test/mock/album"

const isTesting = process.env.NODE_ENV === "test"

const initialState = {
  data: isTesting ? ALBUMS_MOCK : [],
}

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbums: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
})

export const { setAlbums } = albumSlice.actions

export const selectAlbums = (state) => state.album.data

export default albumSlice.reducer
