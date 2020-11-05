import React, { useState } from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import { Title } from "../components/title"
import { ArticleCard } from "../components/articleCard"
import { Col } from "antd"
import Paginator from "../components/paginator"

const RubricsTemplate = (props, { isOpen }) => {

  const rubrics = props.pageContext.props

  const [itemsLimit, setItemsLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [totalItems, setTotalItems] = useState(rubrics.rubric_items.length)//Спросить, как длину всего массива. Написать отдельный query


  const onChange = (page, pageSize) => {
    setItemsLimit(pageSize)
    setOffset((page * 10) - 10)
  }


  return (
    <Layout>
      <Title>
        {rubrics.type_name}
      </Title>
      {rubrics.rubric_items.map((item => (
        <Col xs={24} sm={isOpen ? 11 : 23} md={isOpen ? 11 : 12} lg={8} xl={6} key={item.id}>
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


export default connect(state => ({
  isOpen: state.app.isOpen
}), null)(RubricsTemplate)
