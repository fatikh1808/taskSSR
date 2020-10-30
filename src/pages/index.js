import React, { useState } from "react"
import Layout from "../components/layout"
import { Title } from "../components/title"

import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import "antd/dist/antd.css"

import Maper from "../components/maper"
import Paginator from "../components/paginator"

const GET_PAGE = gql`
 query($limit: Int!, $offset: Int!) {
   article(limit: $limit, order_by: {id: asc}, offset: $offset) {
     id
     img_url
     title
     article_rubric {
       type_name
     }
     article_author {
       last_name
       name
     }
   }
 }
`

const IndexPage = () => {

  const [itemsLimit, setItemsLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [totalItems, setTotalItems] = useState(27)//Спросить, как длину всего массива. Написать отдельный query

  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: { limit: itemsLimit, offset: offset }
  })

  const onChange = (page, pageSize) => {
    setItemsLimit(pageSize)
    setOffset((page * 10) - 10)
  }

  return (
    <Layout>
      <Title/>
      <Maper data={data.article} loading={loading} error={error}/>
      <Paginator
        onChange={onChange}
        itemsLimit={itemsLimit}
        totalItems={totalItems}/>
    </Layout>
  )
}


export default IndexPage
