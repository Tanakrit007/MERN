import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  const menuItems = [
    { link: "/", text: "Home" },
    { link: "/create", text: "Create" },
    { link: "/", text: "Posts" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {""}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item) => (
              <li>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          MERN Blog
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        <a href="/register" className="btn ">
          Register
        </a>
        <a href="/login" className="btn ">
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
