import React from "react";
import {
  Nav
} from "reactstrap";
import RouteMenuItem from "../components/routeMenuItem";

const SideBar = (props) => {
  return (
    <div id="sidebar" className="sidebar">
      <div className="header">
        <p>Choose an option:</p>
      </div>

      <div className="sidebar-wrapper" >
        <Nav className="fa-ul" >
          {props.routes.map((prop, key) => {
            return (<RouteMenuItem {...prop} key={key} />);
          })}
        </Nav>
      </div>
    </div>
  )
}

export default SideBar;

