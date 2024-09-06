import React from "react";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Company Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link" to="/employees">
                Employees
              </Link>
              <Link className="nav-link" to="/departments">
                Departments
              </Link>
              <Link className="nav-link" to="/company">
                Company
              </Link>
              <Link className="nav-link" to="/attendence">
                Attendence
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
