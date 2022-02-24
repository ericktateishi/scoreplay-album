import { useEffect, useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAlbums, getCategories } from "services/api"
import { setAlbums, selectAlbums } from "store/album/slice"
import { setCategories } from "store/category/slice"
import { setSeasons } from "store/season/slice"
import { setTeams } from "store/team/slice"
import { selectFilters } from "store/filter/slice"
import { albumApiParser } from "utils/album"
import { categoryApiParser } from "utils/category"

export const useSearchAlbums = () => {
  const [isLoading, setIsLoading] = useState(false)
  const albums = useSelector(selectAlbums)
  const dispatch = useDispatch()
  const { category, season, team, search } = useSelector(selectFilters)

  const filteredAlbums = useMemo(
    () =>
      albums.filter((album) => {
        if (category && album.categoryId !== category) return false
        if (
          season &&
          album.seasons.findIndex(
            (albumSeason) => albumSeason.id === season
          ) === -1
        )
          return false
        if (
          team &&
          album.teams.findIndex((albumTeam) => albumTeam.id === team) === -1
        )
          return false
        if (
          search &&
          !(album.name || "")
            .toLocaleLowerCase()
            .includes((search || "").toLocaleLowerCase())
        )
          return false
        return true
      }),
    [albums, category, search, season, team]
  )

  useEffect(() => {
    const request = async () => {
      setIsLoading(true)
      const [albumsResponse, categoriesResponse] = await Promise.all([
        getAlbums(),
        getCategories(),
      ])

      const {
        albums: parsedAlbum,
        seasons,
        teams,
      } = albumApiParser(albumsResponse)
      dispatch(setAlbums(parsedAlbum))
      dispatch(setSeasons(seasons))
      dispatch(setTeams(teams))

      dispatch(setCategories(categoryApiParser(categoriesResponse)))
      setIsLoading(false)
    }

    if (!albums?.length) request()
  }, [albums?.length, dispatch])

  return {
    filteredAlbums,
    isLoading,
  }
}
