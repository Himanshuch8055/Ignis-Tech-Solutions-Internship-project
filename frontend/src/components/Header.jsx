import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/eventbrite-seeklogo.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Header() {
    return (
        <>
            <div className="relative w-full bg-white border-b-2 border-gray-200 mb-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl font-bold text-orange-600">Eventbrite</span>
                        </Link>
                    </div>
                    <div className="border border-gray-400 rounded-xl h-10 w-96 bg-gray-100 relative">
                        <input type="text" placeholder="Search" className="h-auto w-80 placeholder-slate-500 absolute inset-y-0 left-0 pl-5  focus:outline-none bg-transparent" />
                        <button type="button" className="absolute inset-y-0 right-0 pr-5">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="">
                        <ul className="inline-flex space-x-8">
                            <li>
                                <NavLink to="Create-Events" className={({ isActive }) => `text-base font-semibold ${isActive ? "text-orange-500" : "text-gray-800"} `}>
                                    <div className='grid justify-items-center hover:bg-gray-100 rounded-full lg:px-5 lg:py-1 hover:text-orange-400'>
                                        <i className="text-xl hover:text-orange-400 fa-solid fa-plus"></i>
                                        <p className='text-sm hover:text-orange-400'>Create an event</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Likes" className={({ isActive }) => `text-base font-semibold ${isActive ? "text-orange-500" : "text-gray-800"}`}>
                                    <div className='grid justify-items-center hover:bg-gray-100 rounded-full lg:px-5 lg:py-1 hover:text-orange-400'>
                                        <i className="text-xl hover:text-orange-400 fa-regular fa-heart"></i>
                                        <p className='text-sm hover:text-orange-400'>Likes</p>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="Auth"
                            className="text-gray-800 hover:bg-gray-100 font-medium rounded-full text-base lg:px-5 lg:py-2.5 mr-2"
                        >
                            Log In
                        </Link>
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-100 font-medium rounded-full text-base lg:px-5 lg:py-2.5 mr-2"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header