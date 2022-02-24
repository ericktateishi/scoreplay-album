import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render } from "@testing-library/react"
import Loading from "."

afterEach(cleanup)

describe("<Loading />", () => {
  it("renders without crashing", () => {
    render(<Loading />)
  })
})
