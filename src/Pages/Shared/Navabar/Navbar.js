import React from 'react';
import CV from '../../../assests/Resume_Md. Al Amin Islam.pdf'
const Navbar = () => {
    const navItem = <>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'> About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href={CV} download className="btn text-white bg-gradient-to-r from-primary to-secondary" >Download Resume</a></li>
    </>
    return (
        <div  class="navbar bg-purple-200 sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-2xl" href='#home'>My Portfolio</a>
            </div>
            <div class="navbar-end hidden lg:flex bg-transparent">
                <ul class="menu menu-horizontal p-0 text-2xl">
                   {navItem}
                </ul>
            </div>
            {/* <div class="navbar-end">
                <a class="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;