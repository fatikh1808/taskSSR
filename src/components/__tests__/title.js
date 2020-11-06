import React from "react"
import renderer from "react-test-renderer"

import { Title } from "../title"

describe("Paginator", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Title siteTitle="Default Starter"/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})