import React from "react";
import "../App.css";
const Aboutpagecover = () => {
  return (
    <>
      {/* <div className="page_cover container-fluid">
        <div className="row page_cover_prj">
          <p>Get In Touch</p>
          <h1>Let's Start A Project! Hire Me.</h1>
          <div className="col-md-5">
            <h6>
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo. Semper
              at tempufddfel. Lorem ipsum dolor sit, amet consectetur elit.
            </h6>
            </div>

          <div className="col-md-5 ms-5">
            <button className="mybtn">Hire me</button>
          </div>
          
        </div>
      </div> */}


      {/* <div className="container-fluid page_cover">
        <div className="row page_cover_prj">
          <div className="col-7">
          <p>Get In Touch</p>
          <h1>Let's Start A Project! Hire Me.</h1>
          <h6>
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo. Semper
              at tempufddfel. Lorem ipsum dolor sit, amet consectetur elit.
            </h6>
          </div>
          <div className="col-5">
            <button className="mybtn btn btn-style btn-success mt-lg-5 mt-4 me-sm-3" >Hire Me</button>
            <button className="  btn btn-style transparent-btn mt-lg-5 mt-4 me-2" >Contact Me</button>
          </div>
        </div>
      </div> */}




<div className=" page_cover ">
        <div className="d-flex justify-content-center gap-5 flex-wrap page_cover_prj">
          <div className="pagecover_width1">
          <p>Get In Touch</p>
          <h1>Let's Start A Project! Hire Me.</h1>
          <h6>
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo. Semper
              at tempufddfel. Lorem ipsum <br /> dolor sit,  amet consectetur elit.
            </h6>
          </div>
          <div className=" pagecover_width2  mt-lg-5">
            <button className="mybtn btn btn-style btn-success mt-lg-4 ms-lg-5 " >Hire Me</button>
            <button className="  btn btn-style transparent-btn  mt-lg-4 ms-3 " >Contact Me</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Aboutpagecover;
