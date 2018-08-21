import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Slides from "./slides";

const client = new ApolloClient({
  uri: "https://api-uswest.graphcms.com/v1/cjkoosra4023x01buxp3k816u/master"
});

const App = () => (
  <ApolloProvider client={client}>
    <Slides />
  </ApolloProvider>
);

export default App;
