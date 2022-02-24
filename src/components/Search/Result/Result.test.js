import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "test/setup"
import Result from "."

afterEach(cleanup)

describe("<Result />", () => {
  it("renders without crashing", () => {
    render(<Result />)
  })
})
