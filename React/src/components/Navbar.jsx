import React from "react";
import {NavLinks} from "./NavLinks.jsx"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return <header className="bg-dark-bckground sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-gray-500 p-8">
        <NavLink to="/"><h1 className="text-left text-2xl" style={{color: "azure"}}>OptimaGT</h1></NavLink>
        <NavLinks />
    </header>;
}


export default Navbar
