exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {

  const article = await  graphql(
    `
    { 
      Blog {
        article {
          id
          body
          article_author {
            last_name
            name
          }
          title
          updated_at
          article_rubric {
            id
            type_name
          }
          img_url
        }
      }
    }
  `)

  const articles = article.data.Blog.article
  articles.forEach(article => {
    createPage({
      path: `/${article.article_rubric.type_name}/${article.id}`,
      component: require.resolve("./src/templates/articlePage.jsx"),
      context: {
        props: article
      }
    })
  })

  const rubric = await graphql(
    `
    {
      Blog {
        rubrics {
          type_name
          id
          rubric_items {
            title
            img_url
            id
            article_author {
              last_name
              name
            }
            article_rubric {
              type_name
            }
          }
        }
      }
    }
  `)

  const rubrics = rubric.data.Blog.rubrics

  rubrics.forEach(rubric => {
    createPage({
      path: `/${rubric.type_name}`,
      component: require.resolve("./src/templates/rubricsPage.jsx"),
      context: {
        props: rubric
      }
    })
  })
}

