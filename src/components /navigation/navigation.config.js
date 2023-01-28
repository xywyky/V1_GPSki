import { routes } from "../../router/routes";
import React from "react";
import Earth from "../../../assets/earth.svg";

export const navigationConfig = {
  items: [
    {
      icon : <Earth width={36} height={36} />,
      label: "Profile",
      to: routes.profile
    },
    {
      icon : <Earth width={36} height={36} />,
      label: "Home",
      to: routes.home,
    },
    {
      icon : <Earth width={36} height={36} />,
      label: "Login",
      to: routes.login
    },
    {
      icon : <Earth width={36} height={36} />,
      label: "Register",
      to: routes.register
    }
  ]
}