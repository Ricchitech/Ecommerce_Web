import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ViewListIcon from "@material-ui/icons/ViewList";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const sidebardata = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Product",
    icon: <ViewListIcon />,
    link: "/products",
  },
  {
    title: "Orders",
    icon: <LocalAtmIcon />,
    link: "/orders",
  },
  {
    title: "Categories",
    icon: <AccountTreeIcon />,
    link: "/category",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/",
  },
  {
    title: "Go Back",
    icon: <ArrowBackIcon />,
    link: "/",
  },
];