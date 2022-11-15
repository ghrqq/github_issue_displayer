import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = process?.env?.NEXT_PUBLIC_GITHUB_AUTH;
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
