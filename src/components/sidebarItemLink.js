import React from "react";
import { NavLink } from "reactstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SidebarItemLink = (props) => {
  function activeRoute(routeName) {
    return props.location && props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  return (
    <li
      className={
        activeRoute(props.path)
      }
      key={props.key}
    >
      <NavLink
        href={props.layout + props.path}
        className="nav-link"
      >
        <FontAwesomeIcon icon={props.icon} />
        <p>{props.name}</p>
      </NavLink>
    </li>
  )
}

export default SidebarItemLink;

