import { routes } from "../../router/routes";
import React from "react";

export const navigationConfig = {
  items: [
    {
      icon : require('../../../assets/maga.png'),
      label: "Partner",
      to: routes.profile
    },
    {
      icon : require('../../../assets/map_2.png'),
      label: "Map",
      to: routes.home,
    },
    {
      icon : require('../../../assets/Home2.png'),
      label: "",
      to: routes.home,
    },


    {
      icon : require('../../../assets/care_2.png'),
      label: "Warn",
      to: routes.station
    },
    {
      icon : require('../../../assets/Buy.png'),
      label: "Register",
      to: routes.register
    }
  ]
}
