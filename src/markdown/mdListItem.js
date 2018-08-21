import React from "react";
import { Appear, ListItem } from "spectacle";

const mdListItem = ({ children }) => (
  <Appear>
    <ListItem padding={12}>{children}</ListItem>
  </Appear>
);

export default mdListItem;
