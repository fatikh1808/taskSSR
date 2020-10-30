import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Title } from "../components/title"
import { ArticleCard } from "../components/articleCard"
import { Col } from "antd"
import Paginator from "../components/paginator"


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

  const [itemsLimit, setItemsLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [totalItems, setTotalItems] = useState(rubrics[0].rubric_items.length)//Спросить, как длину всего массива. Написать отдельный query


  const onChange = (page, pageSize) => {
    setItemsLimit(pageSize)
    setOffset((page * 10) - 10)
  }

  return (
    <Layout>
      <Title>
        {rubrics[0].type_name}
      </Title>
      {rubrics[0].rubric_items.map((item => (
        <Col xs={24} sm={18} md={12} lg={8} xl={6} key={item.id}>
          <ArticleCard
            id={item.id}
            author_name={item.article_author.name}
            author_last_name={item.article_author.last_name}
            title={item.title}
            image={item.img_url}
            rubric={item.article_rubric.type_name}
          />
        </Col>
      )))}
      <Paginator
        onChange={onChange}
        itemsLimit={itemsLimit}
        totalItems={totalItems}/>
    </Layout>
  )

}