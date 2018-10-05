import React from "react";
import { Button } from "mdbreact";

export const FormBtn = props => (
  <Button
    {...props}
    style={{ float: "right", marginBottom: 10 }}
    color="elegant"
  >
    {props.children}
  </Button>
);
