import React from "react"
import { Col, Descriptions, Image, PageHeader, Row, Typography } from "antd"

import Layout from "./layout"
import s from "./articlePageRenderer.module.css"

const { Text } = Typography


const ArticlePageRenderer = ({article, isOpen, backgroundColor}) => {

  return (
    <Layout>
      <Col
        xs={22} sm={isOpen ? 11 : 23} md={isOpen ? 11 : 12} lg={8} xl={6}
           style={{
             marginRight: "auto",
             placeContent: "flex-start",
             marginLeft: 15,
             backgroundColor
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

export default ArticlePageRenderer