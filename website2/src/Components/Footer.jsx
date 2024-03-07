import React from 'react'

const Footer = () => {
  return (
   <>
   
   
   <div className="container-fluid pt-5 back">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="fa fa-stethoscope">Dental Health</span>
              <p>
                Onec Consequat sapien ut cursus rhoncus. Nullam dui mi,
                vulputate ac metus semper quis luctus sed.
              </p>
              <h5>
                Trusted By <span>500+ People </span>{" "}
              </h5>
            </div>
            <div className="col-md-3">
              <h5>Address Info</h5>
              <p>
                {" "}
                <i class="bi bi-geo-alt-fill"></i> 64d canal street TT 3356
                NewYourk,NY.
              </p>
              <p>
                <i class="bi bi-telephone"></i> +1(12) 123 456 789{" "}
              </p>
              <p>
                <i class="bi bi-envelope-fill"></i> info@example.com
              </p>
            </div>
            <div className="col-md-2">
              <h5>Quick Links</h5>
              <p>Terms & Conditions</p>
              <p>Support Helpline</p>
              <p>Helthy Trip</p>
              <p>Privacy Policy</p>
            </div>
            <div className="col-md-3">
              <h5>Subscribe Us</h5>
              <p>Subscribe to our newsletter</p>
              {/* <input type="email"  placeholder='Enter Email Here' name="" id="" />
                      <button className='btns'>Subscribe</button> */}

              <div class="input-group  mb-3">
                <input
                  type="text"
                  class="form-control input_Email_Footer"
                  placeholder="Enter Your Email Here"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-secondary footer_btn_blue"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>

              <p>
                <i class="bi bi-facebook mx-2"></i>{" "}
                <i class="bi bi-twitter mx-2"></i>
                <i class="bi bi-instagram mx-2"></i>{" "}
                <i class="bi bi-google mx-2"></i>
              </p>
            </div>
          </div>
        </div>
        <hr className="linecolor mb-4" />
        <center>
          <p className="pb-5">
            {" "}
            2019 Dental Health. All Rights Reserved | Design by W3layouts{" "}
          </p>
        </center>
      </div>
   
   </>
  )
}

export default Footer