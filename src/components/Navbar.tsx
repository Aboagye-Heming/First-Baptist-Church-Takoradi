import React from 'react'

const Navbar = () => {
  return (
    <>
     <header className="flex justify-between items-center px-10 py-3 absolute top-0 left-0 w-full">
        {/* <h2>
          <a href="#">
            <img alt="" src="images/logo.png" />
          </a>
        </h2> */}
        <ul className="flex nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar