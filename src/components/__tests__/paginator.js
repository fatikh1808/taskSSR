import React from "react"
import renderer from "react-test-renderer"

import Paginator from "../paginator"

describe("Paginator", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Paginator siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})