import "../assets/css/style.css";
import fetch from "node-fetch";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://lottemart.testingnow.me/graphql",
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
