import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg  bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="##">Hi Quality</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link to='/' ><a class="nav-link active text-light" aria-current="page" href="##">Home</a></Link>
                <Link to='/about' ><a class="nav-link text-light" href="##">About</a></Link>
            </div>
            <div className='buttons'>
             <Link to='/login' ><button type="button" class="btn btn-outline-light">Login</button></Link>
             <Link to='/signUp' ><button type="button" class="btn btn-warning ">Sign Up</button></Link>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar