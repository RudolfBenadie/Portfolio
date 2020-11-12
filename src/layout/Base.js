import React from "react";
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import SideBar from "./sideBar";
import TopNav from "./topNav";
import MainRoutes from "../routes/mainRoutes";
import BiographyRoutes from "../routes/biographyRoutes";
import ProfessionalRoutes from "../routes/professionalRoutes";

const BaseLayout = (props) => {
  if (!props.currentUser) return <Redirect to="/auth" />
  return (
    <div className="wrapper" >
      <SideBar
        {...props}
        mainRoutes={MainRoutes}
        biographyRoutes={BiographyRoutes}
        professionalRoutes={ProfessionalRoutes}
      />
      <div className="main-panel">
        <TopNav
          {...props}
          mainRoutes={MainRoutes}
          biographyRoutes={BiographyRoutes}
          professionalRoutes={ProfessionalRoutes}
        />          
        <Switch>
          {MainRoutes.map((prop, key) => {
            return (
              <Route
                exact
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
          {BiographyRoutes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={MainRoutes.length + key}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  )
}

export default BaseLayout;

