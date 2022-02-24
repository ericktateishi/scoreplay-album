import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { act } from "react-dom/test-utils"
import { cleanup, render, fireEvent } from "@testing-library/react"
import CATEGORIES_MOCK from "test/mock/category"
import SelectField from "."

const parameters = {
  name: "category",
  options: CATEGORIES_MOCK,
  valueAttribute: "id",
  labelAttribute: "name",
  value: "15",
  onChange: jest.fn(),
}

afterEach(cleanup)

describe("<SelectField />", () => {
  it("renders without crashing", () => {
    render(<SelectField {...parameters} />)
  })
  it("shows the value", () => {
    const { container } = render(<SelectField {...parameters} />)

    const input = container.querySelector(`#input-${parameters.name}`)
    expect(input.value).toEqual(parameters.value.toString())
  })
  it("calls onChange", () => {
    const categoryToSelect = CATEGORIES_MOCK[0]
    const { container, getByRole, getByText } = render(
      <SelectField {...parameters} />
    )

    const field = container.querySelector(`#${parameters.name}`)
    expect(field).toBeInTheDocument()

    fireEvent.mouseDown(field)

    expect(getByRole("listbox")).not.toEqual(null)

    act(() => {
      const option = getByText(categoryToSelect.name, {
        selector: "li",
      })
      fireEvent.mouseDown(option)
      option.click()
    })

    expect(parameters.onChange).toBeCalled()
  })
})
