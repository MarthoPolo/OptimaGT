import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css';
export const NavLinks = () => {
  return (
    // <div>
    //     <input type="image" src="https://c.animaapp.com/JNsDlkHs/img/rectangle-7.svg"/>
    //     {/* <img alt="Rectangle" src="https://c.animaapp.com/JNsDlkHs/img/rectangle-7.svg"/> */}
    //     <label for="image">login</label>
    // </div>
    <button className="py-2 px-4 border rounded shadow-xl">
        <NavLink to="/login"><p>Login</p></NavLink>
    </button>
    
    
  )
}

const Nav = () => {
    return (
        <nav className='flex w-1/3 justify-end'>
            <div className='flex justify-between'>
                <NavLinks />
            </div>
        </nav>
    )
}

export default NavLinks