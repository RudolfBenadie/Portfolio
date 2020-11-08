import React from "react";
import SidebarItemLink from "./sidebarItemLink";
import SidebarCollapsable from "./sidebarCollapsable";

const RouteMenuItem = (props) => {
  switch (props.type) {
    case "link":
      return (<SidebarItemLink {...props} />);
    case "collapsable":
      return (<SidebarCollapsable {...props} />);
    default:
      return (<></>);
  }
}

export default RouteMenuItem;

