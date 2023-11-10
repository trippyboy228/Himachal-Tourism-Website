import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'


const Navbar=()=>{

 
    return(<>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img className='logos' src="https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
         <Link to="/about">About</Link>
        </li>
        <li className='nav-item'>
            <Link to="/contactus">Contact us</Link>
        </li>
       
       </ul>
          
  
    </div>
  </div>
</nav>
    </>)
}

export default Navbar