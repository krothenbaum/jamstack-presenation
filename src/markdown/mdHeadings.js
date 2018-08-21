import React from "react";
import { Heading } from "spectacle";

const mdHeadings = ({ level, children }) => {
  return (
    <Heading
      size={level}
      textColor={level < 3 ? "tertiary" : "secondary"}
      margin={32}
      textFont="secondary"
      lineHeight={1.2}
      fit={level === 1}
    >
      {children}
    </Heading>
  );
};

export default mdHeadings;
