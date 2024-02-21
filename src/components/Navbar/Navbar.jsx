import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler d-flex justify-content-between w-100 align-items-center flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        {/* <div > */}
          <ul className={toggleMenu ? "navbar-collapse show-navbar-collapse d-flex" : "navbar-collapse"}>
            <li className='nav-item me-5'>
              <Link to = "book" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item ms-5'>
              <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>about</Link>
            </li>
            {/* <li><Link to="/login">Login</Link></li> */}
          </ul>
        {/* </div> */}
      </div>
    </nav>
  )
}

export default Navbar