import React from "react"
import PropTypes from "prop-types"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "store/configure"

function GlobalProviders({ children }) {
  return <Provider store={store}>{children}</Provider>
}

GlobalProviders.propTypes = {
  children: PropTypes.any.isRequired,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: GlobalProviders, ...options })

export * from "@testing-library/react"
export { GlobalProviders }
export { customRender as render }
