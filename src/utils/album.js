const parseDate = (rawDate) => {
  if (!rawDate) return null
  const date = new Date(rawDate * 1000)
  return date.toLocaleDateString()
}

const parseTags = (rawTags = []) =>
  rawTags.map((rawTag) => ({
    id: rawTag?.ID,
    name: rawTag?.name,
  }))

const parseDetections = (detections = []) => {
  const parsedSeasons = []
  const parsedTeams = []

  detections.forEach((detection) => {
    if (detection?.team?.Season?.ID && detection?.team?.Season?.name) {
      parsedSeasons.push({
        id: detection.team.Season.ID,
        name: detection.team.Season.name,
      })
    }

    if (detection?.team?.Team?.ID && detection?.team?.Team?.name) {
      parsedTeams.push({
        id: detection.team.Team.ID,
        name: detection.team.Team.name,
      })
    }
  })

  return {
    parsedSeasons,
    parsedTeams,
  }
}

const addItemToArrayObject = (array = [], newItem = {}) => {
  if (!newItem?.id || array.findIndex((item) => item.id === newItem.id) !== -1)
    return
  array.push(newItem)
}

export const albumApiParser = (raw = []) => {
  const albums = []
  const seasons = []
  const teams = []

  raw.forEach((rawItem = {}) => {
    const {
      ID,
      name,
      category_id: categoryId,
      tag_options: tagOptions,
      detections,
      date,
    } = rawItem

    const { parsedSeasons, parsedTeams } = parseDetections(detections)

    const parsedAlbum = {
      id: ID,
      name,
      categoryId,
      date: parseDate(date),
      tags: parseTags(tagOptions),
      seasons: parsedSeasons,
      teams: parsedTeams,
    }

    parsedSeasons.forEach((parsedSeason) =>
      addItemToArrayObject(seasons, parsedSeason)
    )
    parsedTeams.forEach((parsedTeam) => addItemToArrayObject(teams, parsedTeam))
    albums.push(parsedAlbum)
  })

  return {
    albums,
    seasons,
    teams,
  }
}
