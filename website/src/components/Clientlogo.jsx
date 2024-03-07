import React from "react";
import "../App.css";
import c1 from "../components/images/c1.jpg";
import c2 from "../components/images/c2.jpg";
import c3 from "../components/images/c3.jpg";
import c4 from "../components/images/c4.jpg";
const Clientlogo = () => {
  return (
    <>
      {/* <div className="container-fluid mt-5">
        <div className="row mybackground">
          <div className="col-lg-3 ">
            <img src={c1} alt="" className="mygreenslider" />
          </div>
          <div className="col-lg-3 ">
            <img src={c2} alt="" className="mygreenslider" />
          </div>
          <div className="col-lg-3 ">
            <img src={c3} alt="" className="mygreenslider" />
          </div>
          <div className="col-lg-3 ">
            <img src={c4} alt="" className="mygreenslider" />
          </div>
        </div>
      </div> */}

      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center flex-wrap mybackground">
          <div>
            <img src={c1} alt="" className="mygreenslider" />
          </div>
          <div >
            <img src={c2} alt="" className="mygreenslider" />
          </div>
          <div >
            <img src={c3} alt="" className="mygreenslider" />
          </div>
          <div >
            <img src={c4} alt="" className="mygreenslider" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientlogo;
