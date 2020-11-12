import Skills from "../views/skills";
import EmploymenyHistory from "../views/employmentHistory";

const ProfessionalRoutes = [
  {
    component: Skills,
    icon: "brain",
    layout: "/terminal",
    name: "Skills",
    path: "/skills"
  },
  {
    component: EmploymenyHistory,
    icon: "tools",
    layout: "/terminal",
    name: "Employmeny history",
    path: "/employmenthistory"
  }
];

export default ProfessionalRoutes;

