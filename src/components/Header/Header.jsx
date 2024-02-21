import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>A library is a very useful platform that brings together people willing to learn. It helps us in learning and expanding our knowledge. We develop our reading habits from a library and satisfy our thirst and curiosity for knowledge. This helps in the personal growth of a person and development.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header