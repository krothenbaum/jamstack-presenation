import React from "react";
import styled from "styled-components";
import { Appear, List } from "spectacle";

const StyledList = styled(List)`
  text-indent: -1.9em;
  margin: 0;
  padding: 0 10% !important;
`;

const mdList = ({ ordered, children }) => {
  return <StyledList ordered={ordered}>{children}</StyledList>;
};

export default mdList;
