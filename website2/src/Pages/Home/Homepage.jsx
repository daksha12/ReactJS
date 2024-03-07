import React from "react";
import Homeabout from "../../Components/Homeabout";
import Slider from "../../Components/Slider";
import Whatdo from "../../Components/Whatdo";
import gental from "../../Json/Homeabout";
import Icons from "../../Json/Icon.js";
import card from "../../Json/Card.js";

import "../Home/Home.css";
import "../Home/Header.css";
import Routine from "../../Components/Routine";

import Test from "../../Components/Test";
import Tests from "../../Json/Test.js";
import News from "../../Components/News";
import NewsData from "../../Json/News.js";
import Header from "../../Components/Header";
import Icon from "../../Components/Icon";
import Footer from "../../Components/Footer";
const Homepage = () => {
  return (
    <>
    <Slider/>
    <div className="container mt-5">
        <div className="row">
        <center>
        <h1 className="begental">
          <u>About Us</u>{" "}
        </h1>
      </center>
          <div className="col-lg-8 col-sm-12 ">
            <h2 className="begental">Be Gentle With The Strongest!</h2>

            {gental.map((item) => {
          console.log(item);

          return (
            <>
             
              <p className="begental_para">{item.para}</p>
            </>
          );
        })}

            <div className="container">
              <div className="row">
                <div className="d-flex justify-content-between dental_icon_img">
                  {Icons.map((item) => {
                    console.log(item);

                    return (
                      <>
                        <div className="Icons_ALL_Dental ">
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

                          <center>
                            {" "}
                            <div>
                              {" "}
                              <p className="about_icondesc mt-3">{item.icondesc}</p>
                            </div>
                          </center>
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
              className="dental_big_imgs"
            />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="d-flex align-self-start">
           
            {Icons.map((item) => {
              console.log(item);

              return <>
                   <div className="Icons_ALL">
                    {/* <Icon miniicon={item.icon}/> */}
                   <i className={item.miniicon}></i> 
                  </div>
              
              </>;
            })}
          </div>
         
        </div>
      </div>

      <Routine />
      <div className="container mt-5">
        
        <div className="row  p-4">
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
      <div className="container heds">
        <center>
          <h1 className="mt-5">Testimonials</h1>
        </center>
        <div className="d-flex justify-content-center gap- mms mt-5 ">
          {Tests.map((item) => {
            console.log(item);

            return (
              <>
                <div className="cards">
                  <div class="card-body ">
                    <p class="card-text faa pt-3 pb-3">
                      <Test iconss={item.icon} desc={item.title} />
                    </p>
                  </div>
                  <div className="photoss d-inline d-flex">
                    <div>
                      <img src={item.photo} className={"rimg"} alt="" />
                    </div>
                    <div>
                      <h5 className="ps-3 mt-3 m-0">{item.span}</h5>
                      <span className="font-italic ps-4"> {item.month} </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* Latest News Start */}

      <div className="container mt-5">
        <center>
          {" "}
          <h1 className="heds pt-5 mt-5">Latest News</h1>
        </center>
        <div className="mt-5">
          <div className="d-flex gap-3 latest">
            {NewsData.map((item) => {
              console.log(item);

              return (
                <>
                  <div className="img_lp">
                    <img
                      src={item.photo}
                      className="photos_lp img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <p>{item.desc}</p>
                    <h2 className="mt-3 font_wight">{item.heading}</h2>
                    <p className="para_news">{item.paragraph}</p>
                    {/* <a href="#" className=" btn btn-mybtn  btn-banner">View Post</a> */}
                    <button className="btn-banner">View Post</button>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <div className="d-flex gap-2 latest">
            {NewsData.map((item) => {
              console.log(item);

              return (
                <>
                  <div className="mt-5 pe-4">
                    <p>{item.desc}</p>
                    <h2 className="mt-3 font_wight">{item.heading}</h2>
                    <p className="para_news">{item.paragraph}</p>
                    {/* <a href="#" className=" btn btn-mybtn  btn-banner">View Post</a> */}
                    <button className="btn-banner">View Post</button>
                  </div>

                  <div className="img_lp">
                    <img
                      src={item.photo}
                      className="photos_lp img-fluid"
                      alt=""
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
<Header/>

      {/* Latest News End */}
    </>
  );
};

export default Homepage;
