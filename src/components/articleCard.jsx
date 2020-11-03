import React from "react"
import { Card } from "antd"
import "antd/dist/antd.css"
import { Typography } from "antd"

const { Meta } = Card
const { Text } = Typography

export const ArticleCard = (props) => {

  const { id, author_name, title, rubric, image, author_last_name } = props

  return (
    <Card
      hoverable
      style={{ width: "80%", borderRadius: 5}}
      cover={<img alt="example" src={image}/>}
    >
      <Meta title={title}/>
      <Text style={{ marginRight: 5 }}>{author_name}</Text>
      <Text>{author_last_name}</Text>
      <Meta description={rubric}/>
      <Meta description={<a href={`/${rubric}/${id}`}>More</a>}
      />
    </Card>
  )
}