import React from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
 const NavbarAchievements =()=>{
    return(
      <>
      <div className='nav'>
       <nav className='navbar'>
        <ul className='nav-link'>
             <Link to="/" state={{ scrollTo: "" }} >Home</Link>
              <Link to="/" state={{ scrollTo: "About" }} >About</Link>
               <Link to="/" state={{ scrollTo: "Project" }} >Project</Link>
                <Link to="/" state={{ scrollTo: "Experience" }} >Experience</Link>
            <li className='Menu'><a href='/gallery'>Gallery</a></li>
            <Link to="/" state={{ scrollTo: "About" }} >Contacts</Link>
        </ul>  
       </nav>
       </div>
       </>
    );
 }
 export default NavbarAchievements;