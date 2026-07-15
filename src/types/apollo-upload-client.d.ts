// Minimal type declaration for apollo-upload-client v19 (ships ESM + JSDoc,
// no bundled .d.ts). UploadHttpLink is a terminating ApolloLink.
declare module "apollo-upload-client/UploadHttpLink.mjs" {
  import { ApolloLink } from "@apollo/client";

  export default class UploadHttpLink extends ApolloLink {
    constructor(options?: {
      uri?: string;
      credentials?: string;
      headers?: Record<string, string>;
      fetch?: typeof fetch;
      fetchOptions?: Record<string, unknown>;
      includeExtensions?: boolean;
    });
  }
}
