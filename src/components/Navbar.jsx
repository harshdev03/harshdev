import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <>
    <header>
        <a href=""><h2 className='name'>Harsh Chalwadi</h2></a>
    </header>
    <nav>
        <div className="nav-items">
            <a href="/home">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </div>
           <button className='toogle-dark-mode'><img src="logo.png" alt="sunlogo" height={"60px"} /></button>
           
    </nav>
    </>
  )
}

export default Navbar