import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Col, Descriptions, Image, PageHeader, Row, Typography } from "antd"
import s from './articlePage.module.css'

const { Text } = Typography


export const query = graphql`
  query($id: Int!) {
    Blog {
         article(where: {id: {_eq: $id}}) {
         article_author {
        name
        last_name
      }
      title
      article_rubric {
        type_name
        id
      }
      img_url
      id
      body
       }
     }
   }
`


export default ({ data }) => {

  const article = data.Blog.article[0]

  return (
    <Layout>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={article.title}
      >
        <Descriptions size="small" span={2} column={1}>
          <Descriptions.Item
            label="Written by">{article.article_author.name} {article.article_author.last_name}</Descriptions.Item>
          <Descriptions.Item label="Rubric">
            <a href={`/rubric/${article.article_rubric.id}`}>{article.article_rubric.type_name}</a>
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Image
            width={"70%"}
            src={article.img_url}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <Text className={s.article_body}>{article.body}</Text>
        </Col>
      </Row>
    </Layout>
  )

}