import React from "react";
import { Query, Error, Fetching } from "react-apollo";
import Presentation from "./presentation";
import gql from "graphql-tag";

const GET_SLIDES = gql`
  query {
    slideses(where: { status: PUBLISHED }, orderBy: order_ASC) {
      title
      content
      backgroundImage {
        url
      }
      logoImg {
        url
        fileName
      }
    }
  }
`;

const Slides = () => (
  <Query query={GET_SLIDES}>
    {({ loading, error, data }) => {

      if (error) return <p>error</p>;
      if (loading || !data) return <p>fetching</p>;

      return <Presentation slides={data.slideses} />;
    }}
  </Query>
);

export default Slides;
