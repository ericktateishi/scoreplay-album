import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, render, fireEvent } from "@testing-library/react"
import TextField from "."

const parameters = {
  name: "search",
  value: "15",
  onChange: jest.fn(),
}

afterEach(cleanup)

describe("<TextField />", () => {
  it("renders without crashing", () => {
    render(<TextField {...parameters} />)
  })
  it("shows the value", () => {
    const { container } = render(<TextField {...parameters} />)

    const input = container.querySelector(`#${parameters.name}`)
    expect(input.value).toEqual(parameters.value.toString())
  })
  it("calls onChange", () => {
    const { container } = render(<TextField {...parameters} />)

    const input = container.querySelector(`#${parameters.name}`)
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: { value: "training" },
    })

    expect(parameters.onChange).toBeCalled()
  })
})
