import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import routes from "../views/routes"

const Biography = (props) => {
  let biographyRoutes = routes.filter(route => route.name === "Biography") 
  return (
    <div id="biography" className="content" >
      <Switch>
        {biographyRoutes.map((prop, key) => {
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
  )
}

export default Biography;

