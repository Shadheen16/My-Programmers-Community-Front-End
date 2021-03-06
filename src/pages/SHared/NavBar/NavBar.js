import { MenuIcon, SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo.svg"
import { NavHashLink } from 'react-router-hash-link'

const NavBar = () => {
    return (
        <div>
            <div className="w-screen fixed flex items-center p-1 justify-between bg-white shadow-xs text-[16px] ">
                <div className="ml-8 hidden md:flex"><img className="w-24" src={logo} alt="" /></div>
                <span className="w-screen ml-4 md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
                    <input type="search" name="serch" placeholder="Search"
                        className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
                    <SearchIcon className='w-6 mx-4'/>
                </span>
                <div className="flex flex-row-reverse mr-8 ml-4 md:hidden">
                    <MenuIcon className='"h-6 w-6'/>
                </div >
                <div className="mr-16 hidden md:flex flex-row-reverse">
                    <ul className="hidden flex-1 md:flex items-center justify-end space-x-[65px]">
                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                        <Link to="/">HOME</Link>
                    </li >
                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                      <Link to="/">Startup</Link>
                    </li>
                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                    <Link to="/learn">Learn</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;