import React from "react"
import Box from "@mui/material/Box"
import { useSearchAlbums } from "hooks/searchAlbums"
import Loading from "components/core/Loading"
import Filter from "./Filter"
import Result from "./Result"

function Search() {
  const { filteredAlbums, isLoading } = useSearchAlbums()

  return (
    <Box
      padding="30px 20px"
      maxWidth={1240}
      width="100%"
      margin="0 auto"
      boxSizing="border-box"
    >
      <Filter />
      {isLoading ? <Loading /> : <Result rows={filteredAlbums} />}
    </Box>
  )
}

export default Search
