import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/Logo/sourcelogo.png";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-12" alt="Logo" />
            <p className="text-3xl text-logoColortext text- m-0 p-0 font-bold">
              SOURCE Blog
            </p>
          </Link>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/login"
              className="border-2 border-blue-500 px-6 py-2 rounded-full  transition duration-300 ease-in-out transform text-blue-500 font-semobold hover:bg-blue-500 hover:text-white hover:scale-105 hover:font-bold"
            >
              Sign In
            </NavLink>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${
                      isActive ? "border-blue-500" : "text-gray-700"
                    } pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${
                      isActive ? "border-blue-500" : "text-gray-700"
                    } pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${
                      isActive ? "border-blue-500" : "text-gray-700"
                    } pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `block py-2 pr-4 ${
                      isActive ? "text-blue-500" : "text-gray-700"
                    } pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
