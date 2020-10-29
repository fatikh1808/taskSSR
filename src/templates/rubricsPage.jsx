import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Maper from "../components/maper"
import { Title } from "../components/title"


export const query = graphql`
  query($id: Int!) {
    Blog {
      rubrics(where: {id: {_eq: $id}}) {
      type_name
        rubric_items {
          title
          img_url
          id
          article_author {
            name
            last_name
          }
          article_rubric {
            type_name
          }
        }
      }
    }
  }
`


export default ({ data }) => {

  const rubrics = data.Blog.rubrics

  return (
    <Layout>
      <Title>
        {rubrics[0].type_name}
      </Title>
      <Maper datas={rubrics[0].rubric_items}/>
    </Layout>
  )

}