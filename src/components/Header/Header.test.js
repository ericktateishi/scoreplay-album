import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import Header from "."

afterEach(cleanup)

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(<Header />)
  })
})
