import Skills from "../views/skills";

const BiographyRoutes = [
  {
    component: PersonalDetails,
    icon: "user",
    layout: "/terminal",
    name: "Personal information",
    path: "/personaldetails"
  }
  {
    component: OnlinePresence,
    icon: "user",
    layout: "/terminal",
    name: "Online presence",
    path: "/onlinepresence"
  }
];

export default BiographyRoutes;

