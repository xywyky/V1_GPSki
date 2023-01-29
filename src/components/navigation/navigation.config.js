import { routes } from "../../router/routes";
import React from "react";

export const navigationConfig = {
  items: [
    {
      icon : require('../../../assets/favicon.png'),
      label: "Profile",
      to: routes.profile
    },
    {
      icon : require('../../../assets/favicon.png'),
      label: "Home",
      to: routes.home,
    },
    {
      icon : require('../../../assets/favicon.png'),
      label: "Login",
      to: routes.login
    },
    {
      icon : require('../../../assets/favicon.png'),
      label: "Register",
      to: routes.register
    }
  ]
}