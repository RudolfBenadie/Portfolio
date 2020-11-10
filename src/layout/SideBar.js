import React from "react";
import {
  Link,
  NavLink
} from "react-router-dom";
import {
  Nav,
  UncontrolledCollapse
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = (props) => {
  function activeRoute(routeName) {
    return props.location && props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  return (
    <div id="sidebar" className="sidebar">
      <div className="header">
        <p>Choose an option:</p>
      </div>
      <div className="sidebar-wrapper" >
        <Nav className="fa-ul">
          {
            props.mainRoutes.map((prop, key) => {
              return (
                <li
                  className={
                    activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <FontAwesomeIcon icon={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })
          }

          <li>
            <Nav className="submenu" >
              <Link to="#" color="primary" id="biographyToggler" className="nav-link with-down-caret" >
                Biography
              </Link>
              <UncontrolledCollapse toggler="#biographyToggler" >
                {props.biographyRoutes.map((prop, key) => {
                  return (
                    <li
                      className={
                        activeRoute(prop.path) +
                        (prop.pro ? " active-pro" : "") + " collapse-menu-item"
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.query ? prop.layout + prop.path + prop.query : prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <FontAwesomeIcon icon={prop.icon} className="submenu-icon" />
                        <p>{prop.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
              </UncontrolledCollapse>
            </Nav>
          </li>

        </Nav>
      </div>
    </div>
  )
}

export default SideBar;

