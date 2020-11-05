import React, { useState } from "react"
import { connect } from "react-redux"
import gql from "graphql-tag"
import { useQuery } from "react-apollo-hooks"

import Layout from "../components/layout"
import { Col, Descriptions, Image, PageHeader, Row, Typography } from "antd"
import s from "./articlePage.module.css"

const { Text } = Typography

const GET_TIME = gql`
 query($id: Int!) {
   article(where: {id: {_eq: $id}}) {
   id
   body
   article_author {
     last_name
     name
   }
      title
    at
    updated_at
    article_rubric {
    id
    type_name
    }
    img_url
  }
 }
`

const ArticleTemplate = (props, { isOpen }) => {

  const Ms = (date) => {
    let time = new Date(date) // some mock date
    return time.getTime()
  }

  const { loading, error, data, refetch } = useQuery(GET_TIME, {
    variables: { id: props.pageContext.props.id }
  })

  const [isNew, setIsNew] = useState(true)

  React.useEffect(() => {
    if(!loading){
      if (Ms(data.article[0].updated_at === props.pageContext.props.updated_at || error)) {
        setIsNew(true)
      } else {
        refetch()
        setIsNew(false)
      }
    }
  }, [isNew, loading])

  const article = isNew ? props.pageContext.props : data.article[0]

  return (
    <Layout>
      <Col xs={22} sm={isOpen ? 11 : 23} md={isOpen ? 11 : 12} lg={8} xl={6}
           style={{
             marginRight: "auto",
             placeContent: "flex-start",
             marginLeft: 15
           }}>
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
      </Col>
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


export default connect(state => ({
  isOpen: state.app.isOpen
}), null)(ArticleTemplate)

