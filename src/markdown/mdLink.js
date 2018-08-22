import React from 'react';
import styled from "styled-components";

const StyledA = styled.a`
  color: #d9707b;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2.8rem;
  text-decoration: underline dotted;
  line-height: 1.6;

  &:hover {
    color: #EDEAEE;
    text-decoration: underline solid;
  }
`;

const mdLink = ({ children, href }) => (
  <StyledA href={href} target="_blank">
    {children}
  </StyledA>
);

export default mdLink;
