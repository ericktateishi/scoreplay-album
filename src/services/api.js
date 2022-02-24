const DEFAULT_BEARER_TOKEN = process.env.REACT_APP_DEFAULT_BEARER_TOKEN
const API_URL = process.env.REACT_APP_API_URL

export const getAlbums = async () => {
  const response = await fetch(`${API_URL}event/search/new`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DEFAULT_BEARER_TOKEN}`,
    },
  })
  return response.json()
}

export const getCategories = async () => {
  const response = await fetch(`${API_URL}settings/category`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${DEFAULT_BEARER_TOKEN}`,
    },
  })
  return response.json()
}
