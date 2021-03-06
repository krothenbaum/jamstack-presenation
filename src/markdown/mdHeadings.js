import React from "react";
import styled from "styled-components";
import { Heading } from "spectacle";

const StyledHeading = styled(Heading)`
  & span {
    color: #d9707b;
  }
`;

const mdHeadings = ({ level, children }) => {
  return (
    <StyledHeading
      size={level}
      textColor={level < 3 ? "tertiary" : "secondary"}
      margin={level !== 3 ? "0 32px" : "0px 32px 32px 40%"}
      textFont="secondary"
      lineHeight={1.4}
      fit={level === 1}
      textAlign={level === 3 ? "left" : "center"}
    >
      {children}
    </StyledHeading>
  );
};

export default mdHeadings;
