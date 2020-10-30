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
        }
      }
    }
  `)

  const articles = article.data.Blog.article
  articles.forEach(article => {
    createPage({
      path: `/article/${article.id}`,
      component: require.resolve("./src/templates/articlePage.jsx"),
      context: {
        id: article.id
      }
    })
  })

  const rubric = await graphql(
    `
    {
      Blog {
        rubrics {
          id
        }
      }
    }
  `)

  const rubrics = rubric.data.Blog.rubrics

  rubrics.forEach(rubric => {
    createPage({
      path: `/rubric/${rubric.id}`,
      component: require.resolve("./src/templates/rubricsPage.jsx"),
      context: {
        id: rubric.id
      }
    })
  })
}

