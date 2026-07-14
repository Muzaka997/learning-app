import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import config from "../config";

// GraphQL lives at the API root (no /api/v1), alongside the REST endpoints.
const httpLink = createHttpLink({
  uri: `${config.apiURL}/graphql`,
  credentials: "include",
});

// Reuse the same JWT the REST layer stores in localStorage.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});

export const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
