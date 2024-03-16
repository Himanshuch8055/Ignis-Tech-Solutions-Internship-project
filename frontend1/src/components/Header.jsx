import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">Eventbrite</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <NavLink to="/" className={({ isActive }) => `text-base font-semibold ${isActive ? "text-orange-500" : "text-gray-800"}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="Favorites" className={({ isActive }) => `text-base font-semibold ${isActive ? "text-orange-500" : "text-gray-800"}`}>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-200 font-medium rounded-lg text-base lg:px-5 lg:py-2.5 mr-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-500 hover:bg-orange-400 font-medium rounded-lg text-base lg:px-5 lg:py-2.5"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header