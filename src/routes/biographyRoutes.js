import PersonalDetails from "../views/personalDetails";
import OnlinePresence from "../views/onlinePresence";

const BiographyRoutes = [
  {
    component: PersonalDetails,
    icon: "user",
    layout: "/terminal",
    name: "Personal information",
    path: "/personaldetails"
  },
  {
    component: OnlinePresence,
    icon: "share",
    layout: "/terminal",
    name: "Online presence",
    path: "/onlinepresence"
  }
];

export default BiographyRoutes;

