import React from "react";
import "../Pages/Home/Home.css";
const Topbar = () => {
  return (
    <>
      {/* Topbar Start */}
      {/* <div className="container-fluid topbar w-100">
        <div className="container d-flex justify-content-between  pt-2 pb-2">
        <div>
          <span> <i className="fa fa-envelope-open o px-2"></i> info@Example.com</span>
          <span>  <i className="fa fa-phone o px-2"></i> Call Us +12 345 678</span>
        </div>    
        <div>
                <span> <i className="fa fa-clock px-2 o gap-5"></i> Mon - Fri : 8:30am To 9:30pm</span>   
                <span className="pe-5"> <i className="fa fa-clock o px-2"></i> Sat&Sun:9:00 To 6:00pm</span>   
          </div>
        </div>
      </div> */}

<div className="container-fluid topbar">
    <div className="container">
    <div className="row">
        <div className="col-sm-6 pt-2">
            <ul className="d-lg-flex myul header_top">
                <li><i className="fa fa-envelope-open o px-2"></i> info@Example.com</li>
                <li><i className="fa fa-phone o px-3"></i> Call Us +12 345 678</li>
            </ul>
        </div>
        <div className="col-sm-6 justify-content-lg-end">
            <ul className="d-lg-flex header_right myul pt-2">
                <li> <i className="fa fa-clock px-sm-2 o pe-2"></i> Mon - Fri : 8:30am To 9:30pm</li>
                <li><i className="fa fa-clock o px-sm-2  pe-2"></i> Sat & Sun :9:00pm To 6:00pm   </li>
            </ul>
        </div>
    </div>
    </div>
</div>

      {/* Topbar End */}
    </>
  );
};

export default Topbar;
