import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { act } from "react-dom/test-utils"
import { cleanup, render, fireEvent } from "test/setup"
import ALBUMS_MOCK from "test/mock/album"
import CATEGORIES_MOCK from "test/mock/category"
import SEASONS_MOCK from "test/mock/season"
import TEAMS_MOCK from "test/mock/team"
import Search from "."

afterEach(cleanup)

const testUsingSelectFilter = (filter, linesCount, filedName) => {
  const { getByText, getByRole, getAllByRole, container } = render(<Search />)

  const field = container.querySelector(`#${filedName}`)
  expect(field).toBeInTheDocument()

  fireEvent.mouseDown(field)

  expect(getByRole("listbox")).not.toEqual(null)

  act(() => {
    const option = getByText(filter.name, {
      selector: "li",
    })
    fireEvent.mouseDown(option)
    option.click()
  })

  const input = container.querySelector(`#input-${filedName}`)
  expect(input.value).toEqual(filter.id.toString())

  const allLines = container.querySelectorAll("tbody tr")
  expect(allLines.length).toBe(linesCount)

  // Reset
  fireEvent.mouseDown(field)

  act(() => {
    const optionsToReset = getAllByRole("option")
    fireEvent.mouseDown(optionsToReset[0])
    optionsToReset[0].click()
  })
}

describe("<Search />", () => {
  it("renders all items", async () => {
    const { container } = render(<Search />)

    const allLines = container.querySelectorAll("tbody tr")
    expect(allLines.length).toBe(ALBUMS_MOCK.length)
  })
  it("filter by category", async () => {
    const CATEGORY_TO_FILTER = CATEGORIES_MOCK[0]
    const ITEMS_FILTERED = ALBUMS_MOCK.filter(
      (album) => album.categoryId === CATEGORY_TO_FILTER.id
    )

    testUsingSelectFilter(CATEGORY_TO_FILTER, ITEMS_FILTERED.length, "category")
  })
  it("filter by season", async () => {
    const SEASONS_TO_FILTER = SEASONS_MOCK[0]
    const ITEMS_FILTERED = ALBUMS_MOCK.filter((album) =>
      album.seasons.map((s) => s.id).includes(SEASONS_TO_FILTER.id)
    )

    testUsingSelectFilter(SEASONS_TO_FILTER, ITEMS_FILTERED.length, "season")
  })
  it("filter by team", async () => {
    const TEAMS_TO_FILTER = TEAMS_MOCK[0]
    const ITEMS_FILTERED = ALBUMS_MOCK.filter((album) =>
      album.teams.map((s) => s.id).includes(TEAMS_TO_FILTER.id)
    )

    testUsingSelectFilter(TEAMS_TO_FILTER, ITEMS_FILTERED.length, "team")
  })
  it("filter by search", async () => {
    const { getByText, container } = render(<Search />)
    const ALBUM_TO_FILTER = ALBUMS_MOCK[0]

    const input = container.querySelector("#search")
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: { value: ALBUM_TO_FILTER.name },
    })

    expect(getByText(ALBUM_TO_FILTER.name)).toBeInTheDocument()

    const allLines = container.querySelectorAll("tbody tr")
    expect(allLines.length).toBe(1)
  })
})
