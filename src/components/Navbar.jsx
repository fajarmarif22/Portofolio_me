import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverplay from "./MenuOverplay";
import Logi from "../assets/logo512.png"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#Contact",
  },
]
function Navbar() {
  const [navbarOpen, setOpenNavbar] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center py-2 justify-between mx-auto px-4">
        <Link to="/" className="md:text-5xl text-2xl px-10 text-white font-semibold">
          <img src={Logi} width={24} alt="" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ? (
              <button onClick={()=> setOpenNavbar(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                <Bars3Icon className="h-5 w-5"/>
              </button> 
            ): (
              <button onClick={()=> setOpenNavbar(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                <XMarkIcon className="h-5 w-5"/>
              </button> 
            )
          }
        </div>
        <div className="menu hidden px-10 md:block md:w-auto" id="navbar">
          {/* <ul className="flex p-10 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index)=>(
                <li key={index} className="text-white">
                  <Navlink  href={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul> */}
        </div>
      </div>
      {navbarOpen ? <MenuOverplay links={navLinks}/> : null}
    </nav>
  );
}

export default Navbar;
