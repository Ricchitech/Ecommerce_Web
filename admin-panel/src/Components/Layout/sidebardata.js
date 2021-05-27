import React from 'react';

import HomeIcon from "@material-ui/icons/Home";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ViewListIcon from "@material-ui/icons/ViewList";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PostAddIcon from "@material-ui/icons/PostAdd";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
export const sidebardata = [
  // {
  //   title: username,
  //   icon: <SupervisorAccountIcon />,
  //   link: "",
  // },
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Pages",
    icon: <PostAddIcon />,
    link: "/page",
  },
  {
    title: "Categories",
    icon: <AccountTreeIcon />,
    link: "/category",
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

];