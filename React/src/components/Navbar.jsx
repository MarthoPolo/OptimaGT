import React from "react";
import {NavLinks} from "./NavLinks.jsx"

export const Navbar = () => {
    return <header className="bg-dark-bckground sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-gray-500 p-8">
        <h1 className="text-left text-2xl">OptimaGT</h1>
        <NavLinks />
    </header>;
}


export default Navbar
