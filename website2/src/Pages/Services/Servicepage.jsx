import React from "react";
import Routine from "../../Components/Routine.jsx";
import Whatdo from "../../Components/Whatdo.jsx";
import card from "../../Json/Card.js";
import gental from "../../Json/Homeabout.js";
import service from "../../Json/Service.js";
import "../Services/service.css";
const Servicepage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className=" About_banner_img"></div>
        </div>
      </div>

      <center>
        {" "}
        <h1 className="mt-5 begental">Services</h1>
      </center>

      <div className="container mt-5">
        <div className="row row_border">
          <div className="col-md-2 service_icon i iconsofi">
            <i className="fa fa-heartbeat"></i>
          </div>

          {service.map((item) => {
            console.log(item);
            return (
              <>
                <div className="col-md-4">
                  <h3 className="service_heading mx-auto">{item.h3}</h3>
                  <p className="Service_para mx-auto">{item.somepara}</p>
                </div>
              </>
            );
          })}

          <div className="col-md-2  Services_yellow iconsofi">
            <i className="fa fa-stethoscope"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2  services_green i service_icon iconsofi">
            <i className="fa fa-bullseye"></i>
          </div>

          {service.map((item) => {
            console.log(item);
            return (
              <>
                <div className="col-md-4">
                  <h3 className="service_heading mx-auto">{item.h3}</h3>
                  <p className="Service_para mx-auto">{item.somepara}</p>
                </div>
              </>
            );
          })}

          <div className="col-md-2  service_blue i iconsofi">
            <i className="fa fa-user-md"></i>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <center className="heds mb-3">
            {" "}
            <h1>What We Do</h1>
          </center>
          {card.map((item) => {
            console.log(item);

            return (
              <>
                <div className="col-md-4 mycard mb-5">
                  <Whatdo heading={item.title} desc={item.para} />
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* Appoinment Start */}
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center gap-5 content_res">
          <div className="">
            <img
              src="https://demo.w3layouts.com/demos_new/template_demo/22-03-2019/dental_health-demo_Free/656496551/web/images/b.jpg"
              className=""
              alt=""
            />
          </div>
          <div className="">
            <h1 className="Appoint_heading mb-3">
              Make Your Appointment Today
            </h1>

            {gental.map((item) => {
              console.log(item);

              return (
                <>
                  <p className="Service_para">{item.para}</p>
                  <p className="Service_para">{item.paramini}</p>
                </>
              );
            })}
            <button className="btn-banner">Book Now</button>
          </div>
        </div>
      </div>

      {/* Appoinment End*/}
    </>
  );
};

export default Servicepage;
