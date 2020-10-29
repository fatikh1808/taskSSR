import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import dotenv from "dotenv"
import React from "react"
import { ApolloProvider } from "react-apollo"


dotenv.config()

export const client = new ApolloClient({
  uri: "https://gql-2.test.serafim.help/v1/graphql",
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET
  },
  fetch
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)