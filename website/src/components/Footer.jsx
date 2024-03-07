import React from "react";

import logo from '../components/images/footlogo.jpg'
import "../App.css";
const Footer = () => {
  return (
    <>

      <div className="container-fluid mycontent  footerbac">
      <center>
        <div className="row myfooterimg   ">
         <b> <img src={logo} alt="" className="mt-5" /></b>
        </div>
        <div className=" mt-5 d-flex justify-content-center flex-wrap gap-4 myfooterflex ">
          <div>
            <span>
              <i className="fas fa-phone ms-5"></i> +12 345 678 900
            </span>
          </div>
          <div>
            <span className="">
              <i className="fas fa-envelope"> </i> info@example.com
            </span>
          </div>
          <div>
            <span>
              <i class="bi bi-geo-alt-fill "></i> info@example.com
            </span>
          </div>


          
        </div>
        </center>
        <div className="footer_rights d-flex justify-content-evenly gap-5 ms-5 mt-5">
                <p>   © 2023 UI Portfolio. All Rights Reserved | WordPress Theme by <a href="https://w3layouts.com">W3c Layouts</a></p>
     

        <div className="footer_icons">
        <a href="https://vk.com/w3layouts"><span class="fab me-5 fa-vk"></span></a>
        <a href="https://twitter.com/W3layouts"><span class="fab ms-5 me-5 fa-twitter"></span></a>
        <a href="https://myaccount.google.com/intro/profile"><span class="fab ms-5 me-2 fa-google-plus"></span></a>
        <a href="https://in.pinterest.com/w3layouts/_created/"><span class="fab ms-5 me-2 fa-pinterest"></span></a>
        <a href="https://vk.com/w3layouts"><span class="fab ms-5 me-2 fa-vk"></span></a>
                {/* <p><span class="fab me-2 fa-twitter-f"></span></p> */}
        </div>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
