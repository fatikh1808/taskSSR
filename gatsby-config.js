const fetch = require("isomorphic-fetch")
const {createHttpLink} = require("apollo-link-http")
require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "hasura",
        fieldName: "Blog",
        createLink: pluginOptions => {
          return createHttpLink({
            uri: "https://gql-2.test.serafim.help/v1/graphql",
            headers: {
              "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET
            },
            fetch
          })
        }
      }
    }
  ]
}