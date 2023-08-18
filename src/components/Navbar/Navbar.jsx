import Link from "next/link";
import React from "react";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/contact/info",
      title: "Info",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/blogs",
      title: "blogs",
    },
    {
      path: "/dashboard",
      title: "dashboard",
    },
  ];
  return (
    <nav className="flex justify-between w-full px-10 py-5">
      <h1 className="text-4xl font-bold">Try Next</h1>
      <ul className="flex gap-3">
        {navItems.map(({ path, title }) => (
          <li className="mx-2" key={path}>
            <NavLink activeClassName="bg-red-500" exact={path === '/' || path === "/contact"} href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
