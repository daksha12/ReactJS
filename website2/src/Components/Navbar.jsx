import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Pages/Home/Home.css"

const Navbar = () => {
  

  return (
   <>
   
   <nav class="navbar navbar-expand-lg mynavbartext ">
  <div class="container logotext">
    <a class="navbar-brand  " href="#" > <h5><i class="fa-solid fa-stethoscope "> Dental Health</i></h5></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fa-solid fa-bars my-slef_make"></i></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 navbar_ul_text">
        <li class="nav-item ">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" to="About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="service">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="gallery">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="contactus">Contact Us</Link>
        </li>
       
      
      </ul>
      <form class="d-flex" role="search">
       
      <button class=" btn-banner_navBar" type="submit" >Book Now</button>
      </form>
      
    </div>
  </div>
</nav>
   

   </>
  )
}

export default Navbar