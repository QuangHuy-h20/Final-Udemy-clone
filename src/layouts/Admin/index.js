import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div >
      <div>
        <h3>CyberLearn</h3>
        <Link to="/admin/courses">Courses</Link>
        <Link to="/admin/users">Users</Link>
      </div>
      {/**Content */}
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
