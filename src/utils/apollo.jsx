import ApolloClient from "apollo-client"
import fetch from "isomorphic-fetch"
import React from "react"
import { ApolloProvider } from "react-apollo-hooks"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

const http = new HttpLink({
  uri: "https://gql-2.test.serafim.help/v1/graphql",
  headers: {
    "x-hasura-admin-secret": process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET
  },
  fetch
})

export const client = new ApolloClient({ link: http, cache: new InMemoryCache() })

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)