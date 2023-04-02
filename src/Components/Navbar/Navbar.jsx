import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <nav className="bg-white p-4 shadow-lg">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open ? (
              <XCircleIcon className="h-6 w-6 text-black hover:text-violet-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black hover:text-violet-600" />
            )}
          </span>
        </div>
        <ul
          className={`md:flex md:static justify-center gap-12 absolute duration-700 ${
            open ? "top-16" : "-top-32"
          }`}
        >
          {routes.map((route) => (
            <li className="text-lg hover:underline" key={route.id}>
              <a
                className="hover:underline text-blue-600 hover:text-violet-600"
                href={route.path}
              >
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
