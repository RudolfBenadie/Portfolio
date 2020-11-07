import React from "react";
import {
  Container, 
  Navbar,
  NavbarBrand
} from "reactstrap";
import routes from "../views/routes";

const TopNav = (props) => {

  function getLocation() {
    let location = "Profile";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        location = prop.name;
      }
      return null;
    });
    return location;
  }

  return (
    <Navbar>
        <Container fluid>
        <div className="spacer"></div>
        <div className="content">
          <NavbarBrand>
            {getLocation()}
          </NavbarBrand>
        </div>
      </Container>
    </Navbar>
  )
}

export default TopNav;

