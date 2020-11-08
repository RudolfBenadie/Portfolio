import React from "react";
import {
  Link
} from "react-router-dom"
import {
  Nav,
  UncontrolledCollapse
} from "reactstrap";
import RouteMenuItem from "./routeMenuItem";

const SidebarCollapsable = (props) => {
  return (
    <li>
      <Nav>
        <Link to="#" color="primary" id={`${props.name}Toggler`} className="nav-link with-down-caret" >
          {props.name}
        </Link>
        <UncontrolledCollapse toggler={`#${props.name}Toggler`}>
          {props.routes && props.routes.map((prop, key) => {
            return (<RouteMenuItem {...prop} key={key} />)
          })}
        </UncontrolledCollapse>
      </Nav>
    </li>
  );
}

export default SidebarCollapsable;

