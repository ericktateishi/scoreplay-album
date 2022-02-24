export const categoryApiParser = (rawCategories = []) =>
  rawCategories.map((raw) => ({
    id: raw.ID,
    name: raw.name,
  }))
