import { Hidden } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import SideBar from "../../components/Sidebar/SideBar";

const AdminLayout = ({ children }) => {
  return (
    
    <Hidden>
      <SideBar/>
      {/**Content */}
      <div>{children}</div>
    </Hidden>
  );
};

export default AdminLayout;
