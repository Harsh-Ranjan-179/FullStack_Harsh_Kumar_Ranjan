import React from "react";
import { Link, NavLink } from "react-router-dom";
// import '../index.css'

function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
                className="h-10"
              />
            </Link>
          </div>

          <div>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "hover:text-blue-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "hover:text-blue-500"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "hover:text-blue-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "hover:text-blue-500"
                  }
                >
                  Find Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/employer"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "hover:text-blue-500"
                  }
                >
                  Post a Job
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>
      <div className="h-16"></div>
    </>
  );
}

export default Header;
