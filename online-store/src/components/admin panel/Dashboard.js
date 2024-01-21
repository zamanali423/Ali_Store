import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <header id="header">
          <h1>Admin Dashboard</h1>
        </header>
        <nav id="nav">
          <ul>
            <li>
              <Link to="/admin/users">Users</Link>
            </li>
            <li>
              <Link to="/admin/contacts">Contact</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <main className="main">
          {/* <!-- Your main content goes here --> */}
          <h2>Welcome to the Admin Dashboard!</h2>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
