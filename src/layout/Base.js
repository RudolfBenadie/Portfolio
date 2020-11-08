import React, { useRef } from "react";
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import routes from "../views/routes";

const BaseLayout = (props) => {
  if (!props.currentUser) return <Redirect to="/auth" />
  return (
    <div className="wrapper" >
      <SideBar {...props} routes={routes} />
      <div className="main-panel">
        <TopNav {...props} />
        <div id="baseContainer" >
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default BaseLayout;

