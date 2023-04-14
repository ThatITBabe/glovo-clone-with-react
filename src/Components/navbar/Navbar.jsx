import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
            <div class="container">
                <a class="navbar-brand"><img src="logo.png" alt="logo"/></a>
                <form class="d-flex">
                    <button class="btn" type="submit">Get Started</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar