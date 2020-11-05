import React, { useState } from "react"
import { connect } from "react-redux"
import gql from "graphql-tag"
import { useQuery } from "react-apollo-hooks"

import ArticlePageRenderer from "../components/articlePageRenderer"

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
    if (!loading) {
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
    <ArticlePageRenderer article={article} isOpen={isOpen}/>
  )

}


export default connect(state => ({
  isOpen: state.app.isOpen
}), null)(ArticleTemplate)

