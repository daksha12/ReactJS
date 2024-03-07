import React from "react";
import Icons from ".././Json/Icon.js";
import "../Pages/Home/Home.css";
import "../Pages/About/About.css";
import iconjs from "../Components/Icon";
const Homeabout = (props) => {
  return (
    <>
      <center>
        <h1 className="mt-5">
          <u>About Us</u>{" "}
        </h1>
      </center>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <h2>Be Gentle With The Strongest!</h2>
            <p className="texts_para">{props.desc}</p>
            {/* <p>{props.miniicon}</p> */}

            <div className="container">
              <div className="row">
                <div className="d-flex dental_icon_img">
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
                            <p className="about_icondesc">{item.icondesc}</p>
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
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
