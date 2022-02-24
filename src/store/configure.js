import { configureStore } from "@reduxjs/toolkit"
import albumReducer from "./album/slice"
import categoryReducer from "./category/slice"
import seasonReducer from "./season/slice"
import teamReducer from "./team/slice"
import filterReducer from "./filter/slice"

export const store = configureStore({
  reducer: {
    album: albumReducer,
    category: categoryReducer,
    season: seasonReducer,
    team: teamReducer,
    filter: filterReducer,
  },
})
