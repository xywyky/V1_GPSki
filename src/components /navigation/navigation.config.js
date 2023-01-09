import Earth from "../../../assets/earth.svg";
import HammerIcon from "../../../assets/hammer.svg";
import IdeaIcon from "../../../assets/lamp.svg";
import Profile from "../../../assets/profile.svg";
import { routes } from "../../router/routes";

export const navigationConfig = {
  items: [
    {
      label: "Profile",
      to: routes.profile,
      needAuth: false
    },
    {
      label: "Home",
      to: routes.home,
      needAuth: true
    },
    {
      label: "Login",
      to: routes.login,
      needAuth: false
    },
    {
      label: "Register",
      to: routes.register,
      needAuth: true
    }
  ]
}