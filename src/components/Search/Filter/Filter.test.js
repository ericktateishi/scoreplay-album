import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "test/setup"
import Filter from "."

afterEach(cleanup)

describe("<Filter />", () => {
  it("renders without crashing", () => {
    render(<Filter />)
  })
})
