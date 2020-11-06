import React from "react"
import renderer from "react-test-renderer"

import {ArticleCard} from "../articleCard"

describe("ArticleCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ArticleCard siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})