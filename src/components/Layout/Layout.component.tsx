import React from "react";
import { DivStyle } from "./Layout.style";
import { LayoutChildren } from "./Layout.type";

const LayoutComponent = ({ children }: LayoutChildren) => {
  return <DivStyle>{children}</DivStyle>;
};

export default LayoutComponent;
