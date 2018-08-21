import React from "react";
import { render } from "react-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

// const client = new ApolloClient({
//   uri: "https://api-uswest.graphcms.com/v1/cjkoosra4023x01buxp3k816u/master"
// });

// const App = () => (
//   <ApolloProvider client={client}>
//     <div>
//       <Slides />
//     </div>
//   </ApolloProvider>
// );

render(<App />, document.getElementById("root"));
registerServiceWorker();
