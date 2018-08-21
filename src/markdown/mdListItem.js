import React from "react";
import { Appear, ListItem } from "spectacle";

const mdListItem = ({ children }) => (
  <Appear>
    <ListItem padding={'16px 0'} textSize={"3rem"} >{children}</ListItem>
  </Appear>
);

export default mdListItem;
