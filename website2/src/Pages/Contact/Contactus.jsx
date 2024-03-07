import React from "react";
import "../../Pages/Contact/Contact.css";
const Contactus = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className=" About_banner_img"></div>
        </div>
      </div>
      <center>
        {" "}
        <h1 className="mt-5 Contact_text">Contact Us</h1>
      </center>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mb-3">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control "
                  placeholder="Email"
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Phone no"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subject"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Message"
                  class="form-control  mb-3"
                  required=""
                  spellcheck="false"
                  data-ms-editor="true"
                ></textarea>
                <button className="btn-banner">Submit</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="Contact_text mt-lg-0  mt-sm-5">
              <h4 className="mb-2">Address Information</h4>
              <i class="fa-solid fa-location-dot px-2"></i>{" "}
              <span className="">64d canal street TT 3356 Newyork, NY.</span>
              <br />
              <i class="fa-solid fa-phone px-2"></i>
              <span className="">Phone : +1 123 456 789</span>
              <br />
              <i class="fa-solid fa-envelope px-2"></i>{" "}
              <span className="">Email : info@example.com</span>
              <h4 className="mt-4">Book Your Appointment</h4>
              <i class="fa-solid fa-envelope px-2"></i>
              <span>Call us at +1 123 456 789</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101997.46109295542!2d-122.04748000000001!3d36.975891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e441b7c36d549%3A0x52ca104b2ad7f985!2sSanta%20Cruz%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1673845986906!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          height={500}
          width={"100%"}
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contactus;
