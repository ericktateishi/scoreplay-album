import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import Result from "."

afterEach(cleanup)

describe("<Result />", () => {
  it("renders without crashing", () => {
    render(<Result />)
  })
})
