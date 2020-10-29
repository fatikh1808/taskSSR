import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Title } from "../components/title"

import Maper from "../components/maper"

export const query = graphql`
  {
     Blog {
      article {
        article_author {
          name
          last_name
        }
        title
        article_rubric {
          type_name
        }
        img_url
        id
      }
    }
  }
`

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Title/>
      <Maper datas={data.Blog.article}/>
    </Layout>
  )
}


export default IndexPage
