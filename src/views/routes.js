import Dashboard from "./dashboard";
import Biography from "./biography";
import Skills from "./skills";

const routes = [
  {
    component: Dashboard,
    icon: "tachometer-alt",
    layout: "/terminal",
    name: "Dashboard",
    path: "/dashboard",
    type: "link"
  },
  {
    component: Biography,
    icon: "user",
    layout: "/terminal",
    name: "Biography",
    path: "/biography",
    type: "collapsable",
    routes: [
      {
        component: Skills,
        icon: "cog",
        layout: "/terminal/biography",
        name: "Skills",
        path: "/skills",
        type: "link"
      }
    ]
  }
];

export default routes;

