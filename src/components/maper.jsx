import React from "react"
import { Col } from "antd"
import { connect } from "react-redux"

import { ArticleCard } from "./articleCard"


const Maper = ({ data, error, loading, isOpen, }) => {

  if (loading) {
    return <h1> Loading ... </h1>
  } else if (error) {
    return <h1> Server error ... </h1>
  } else {
    return (
      data.map((item => (
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
          )
        )
      )
    )
  }
}

export default connect(state => ({
  isOpen: state.app.isOpen
}), null)(Maper)
