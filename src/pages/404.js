import React, { useState } from "react"
import gql from "graphql-tag"
import { useQuery } from "react-apollo-hooks"
import { connect } from "react-redux"

import Layout from "../components/layout"
import ArticlePageRenderer from "../components/articlePageRenderer"

const GET_DATA = gql`
 query($id: Int!, $type: String!) {
   rubrics(where: {type_name: {_eq: $type}}) {
     rubric_items(where: {id: {_eq: $id}}) {
       id
       title
       rubric_id
       img_url
     }
   }
 }
`

const NotFoundPage = (props) => {

  const [isNFP, setIsNFP] = useState(false)

  const url = props.location.pathname
  let path = url.split("/")
  path.shift()
  //
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { id: parseInt(path[1]), type: path[0] }
  })

  React.useEffect(() => {
    if (!loading) {
      if (data.length > 0) {
        setIsNFP(true)
      }
    }
  }, [loading])

  if (isNFP) {
    return <ArticlePageRenderer article={data.article[0]} isOpen={props.isOpen}/>
  } else {
    return <Layout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  }
}

export default connect(state => ({
  isOpen: state.app.isOpen
}), null)(NotFoundPage)

