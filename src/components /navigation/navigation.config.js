import { routes } from "../../router/routes";

export const navigationConfig = {
  items: [
    {
      label: "Profile",
      to: routes.profile
    },
    {
      label: "Home",
      to: routes.home,
    },
    {
      label: "Login",
      to: routes.login
    },
    {
      label: "Register",
      to: routes.register
    }
  ]
}