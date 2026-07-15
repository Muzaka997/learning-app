import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import config from "../config";

// UploadHttpLink handles both regular operations and multipart file uploads
// (when a File/Blob appears in the variables). Terminating link.
const uploadLink = new UploadHttpLink({
  uri: `${config.apiURL}/graphql`,
  credentials: "include",
  // Apollo Server's CSRF prevention requires a preflight header for
  // multipart (file upload) requests. Harmless on normal requests.
  headers: { "Apollo-Require-Preflight": "true" },
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
  link: from([authLink, uploadLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
