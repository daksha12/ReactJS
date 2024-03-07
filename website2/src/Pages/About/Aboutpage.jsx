import React from "react";
import Homeabout from "../../Components/Homeabout.jsx";
import banner from "../../Json/About_banner.js";
import "../About/About.css";
import "../Home/Home.css";
import gental from "../../Json/Homeabout.js";
import Icons from "../../Json/Icon.js";
import Routine from "../../Components/Routine.jsx";
import Doctor from "../../Components/Doctor.jsx";
import Header from "../../Components/Header.jsx";
const Aboutpage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className=" About_banner_img"></div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <center>
            <h1 className="begental">
              <u>About Us</u>{" "}
            </h1>
          </center>
          <div className="col-lg-8 col-sm-12">
            <h2>Be Gentle With The Strongest!</h2>

            {gental.map((item) => {
              console.log(item);

              return (
                <>
                  <p>{item.para}</p>
                </>
              );
            })}

            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between  dental_icon_img">
                  {Icons.map((item) => {
                    console.log(item);

                    return (
                      <>
                        <div className="Icons_ALL_Dental pt-3">
                          <i
                            className={item.icon}
                            style={{
                              backgroundColor: "#00bcd5",
                              
                              fontSize: "30px",
                              borderRadius: "65px",
                              padding:"20px",
                              color: "white",
                            }}
                          ></i>
                          <div>
                            {" "}
                            <p className="about_icondesc mt-3">{item.icondesc}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <img
              src="https://demo.w3layouts.com/demos_new/template_demo/22-03-2019/dental_health-demo_Free/656496551/web/images/tooth.png"
              style={{ height: "300px", width: "320px" }}
              className='dental2 dental_big_imgs'
              alt=""
            />
          </div>
        </div>
      </div>

      <Routine />

      <Doctor />
      <Header />
    </>
  );
};

export default Aboutpage;
