import React from "react";
import "../Pages/Home/Home.css";
import gental from "../Json/Homeabout";
import Homeabout from "./Homeabout";
const Routine = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center gap-5 content_res">
          <div className="">
            <img
              src="https://demo.w3layouts.com/demos_new/template_demo/22-03-2019/dental_health-demo_Free/656496551/web/images/about.jpg"
              className="imgrt img-fluid"
              alt=""
            />
          </div>
          <div className="">
            <h1 className="begental_Routine">Routine Dental Exams And Check Ups At 30$.</h1>

            {gental.map((item) => {
              console.log(item);

              return (
                <>
                <p>{item.para}</p>
                </>
              );
            })}
            <p>Quisque ac sapien quis orci pulvinar finibus quis eu urna Quisque Suspendisse id felis sed felis tincidunt finibus. Nulla sed justo tellus. Donec ut felis ante ipsum.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Routine;
