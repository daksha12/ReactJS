import React from "react";
import "../App.css";
import logo1 from "../components/images/mid.jpg";
import Progress from "./Progress";

const Aboutfew = () => {
  return (
    <>
      <div className="container bioimg pt-5">
        <div className="row">
          <div className="col-sm-3 col-lg-5">
            {/* <Bio pic={b1} myclass={"imgs img-fluid"} /> */}

            <img src={logo1} alt="" className="imgs_about img-fluid" />
          </div>

          <div className="col-sm-3 col-lg-6  mybio">
            <h6 class="w3l-title-small mb-1">ABOUT ME</h6>
            <h1 className="designerpt-2 mb-2">A Few Words About Me</h1>
            <br />
            <p className="my-3 pe-lg-5">
              I love Graphic design and Photography and have been working on my
              portfolio since 2016. I Can give your business a new Creative
              start right away! Contact me and we will discuss your projects!
            </p>
            <b>
              Having O6 Years of Experience. I Would Love to make your Ideas
              real. I Can give your business a new Creative start right away!
            </b>
     <Progress/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutfew;
