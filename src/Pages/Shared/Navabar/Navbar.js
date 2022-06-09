import React from 'react';
import CV from '../../../assests/Resume_Md. Al Amin Islam.pdf'
import { Link } from 'react-scroll';
const Navbar = () => {
    const navItem = <>
        <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-25} duration={500}> About</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={-25} duration={500}>Projects</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-25} duration={800}>Contact</Link></li>
        {/* <li><a href={CV} download className="btn text-white bg-gradient-to-r from-primary to-secondary text-2xl" >Download Resume</a></li> */}
    </>
    return (
        <div  className="navbar bg-purple-200 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-2xl" href='#home'>My Portfolio</a> */}
                <Link to="home" spy={true} smooth={true} offset={-25} duration={700}className="btn btn-ghost normal-case text-3xl">My Portfolio</Link>
                
            </div>
            <div className="navbar-end hidden lg:flex bg-transparent">
                <ul className="menu menu-horizontal p-0 text-2xl">
                   {navItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;