import React from "react";
import "../App.css";
import i1 from "../components/images/i1.jpg";
const Grid = () => {
  return (
    <>
      <div className="container mt-5 mygrid">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="row mt-5">
              <div className="col-md-6 col-sm-12">
                <h3>
                  <i class="bi bi-wordpress text-success mb-5"></i>Web
                  Devlopment
                </h3>
                <p>
                  Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <h3>
                  <i class="bi bi-graph-up-arrow text-success "></i>Research &
                  Analysis
                </h3>
                <p>
                  Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 col-sm-12">
                <h3>
                  <i class="bi bi-phone text-success "></i>Responsive Design
                </h3>
                <p>
                  Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <h3>
                  <i class="fa-brands fa-css3-alt text-success"></i>
                  Responsive Design
                </h3>
                <p>
                  Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 col-sm-12">
                <h3>
                  <i class="fas fa-headset text-success"></i>Responsive Design
                </h3>
                <p>
                  Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <h3>
                  <i class="fas fa-layer-group text-success"></i>Responsive
                  Design
                </h3>
                <p>
                  Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 mb-5">
            <img src={i1} className="gridimg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
