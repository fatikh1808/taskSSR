import React from 'react'
import { Col } from "antd"
import { ArticleCard } from "./articleCard"


const Maper = ({datas}) => {
  return (
    datas.map((item => (
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
        )
      )
    )
  )
}

export default Maper;