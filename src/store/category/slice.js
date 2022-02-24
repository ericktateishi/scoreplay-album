import { createSlice } from "@reduxjs/toolkit"
import CATEGORIES_MOCK from "test/mock/category"

const isTesting = process.env.NODE_ENV === "test"

const initialState = {
  data: isTesting ? CATEGORIES_MOCK : [],
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
})

export const { setCategories } = categorySlice.actions

export const selectCategories = (state) => state.category.data

export default categorySlice.reducer
