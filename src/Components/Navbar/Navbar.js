import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">ROKONUZZAMAN</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse link" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link me-5 text-white" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-5 text-white" href="#about">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-5 text-white" href="#">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-5 text-white" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-5 text-white" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-5 text-white" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>
      </div>
    );
};

export default Navbar;