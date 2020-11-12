import React, { useState } from "react";
import {
  Card,
  CardBody,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";


const TopNav = (props) => {

  const [profileOpen, setProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sidebarToggle = React.useRef();

  const profile = {
    name: "Rudolf Benadie",
    email: "rjbenadie70@gmail.com",
    phone: "+44 78 578 29084"
  }

  function getBrand() {
    let brandName = "Profile";
    var routes = [...props.mainRoutes, ...props.biographyRoutes, ...props.professionalRoutes];
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }

  function openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Navbar>
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand>
            {getBrand()}
          </NavbarBrand>
          {
            profile ?
              <Dropdown
                nav
                isOpen={profileOpen}
                toggle={() => setProfileOpen(!profileOpen)}
                className="profile-info"
              >
                <DropdownToggle caret nav>About</DropdownToggle>
                <DropdownMenu className="profile-dropdown">
                  <Card className="granite">
                    <CardBody>
                      <table>
                        <tbody>
                          <tr>
                            <td>Name: {profile.name}</td>
                          </tr>
                          <tr>
                            <td>Email: {profile.email}</td>
                          </tr>
                          <tr>
                            <td>Phone: {profile.phone}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CardBody>
                  </Card>
                </DropdownMenu>
              </Dropdown>
              :
              <></>
          }
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <div className="justify-content-end">
          <Nav navbar>
            {/* <NavItem>
            <Link to="/" className="nav-link btn-rotate" >
              <FontAwesomeIcon icon="cog" />
            </Link>
          </NavItem> */}
            {/* <Dropdown
              nav
              isOpen={this.state.dropdownOpen}
              toggle={e => this.dropdownToggle(e)}
            >
              <DropdownToggle id="avatar"><span>{initials}</span></DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a" onClick={this.props.signOut}>Sign out</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
          </Nav>
        </div>
      </Container>
    </Navbar>

  )
}

export default TopNav;

