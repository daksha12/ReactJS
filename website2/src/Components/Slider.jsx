import React from "react";
import i1 from "../Pages/imageshome/banner.png";
const Slider = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mycolsix">
            <div
              id="carouselExampleCaptions"
              class="carousel slide "
              data-bs-ride="false"
            >
              <div className="my_slider_move pt-5">
                <div class="carousel-indicators pb-5">
                  <button
                    type="button  btn-primary"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active button_Slider"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="button_Slider"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    className="button_Slider"
                  ></button>
                </div>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="d-block w-100">
                    <h2>Quality Orthodontic</h2>
                    <h1 className="treat_font">Treatments.</h1>

                    <p className="heds">
                      Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui
                      Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum
                      Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices
                      Posuere Cubilia Curae.
                    </p>
                    <button className="btn-banner btnbg">Read More</button>
                    <button className="btn-banner-consult btnbg2">
                      Consult a dentist
                    </button>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="d-block w-100 ">
                   
                    <div className="media_inline">
                    <h2 className="Slider_care">
                      We Care About <br />
                    </h2>{" "}
                    <h2 className="your">Your</h2>
                    <span className="Slider_teeth"> Teeth</span>
                    </div>

                    <div className="media_block">
                      <h2 className=""> We Care About </h2><h2>Your Teeth</h2>
                    </div>
                   
                    <p className="mt-md-4 ">
                      Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum
                      Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices
                      Posuere Cubilia Curae."
                    </p>
                    <button className="btn-banner pe-2 btnbg">Read More</button>
                    <button className="btn-banner-consult btnbg2">
                      Consult a dentist
                    </button>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="d-block w-100">
                    <div className="media_inline">
                      {" "}
                      <h2>Professionally </h2>{" "}
                      <h2 className="your">Trained </h2>
                      <span className="Slider_teeth">Dental</span>{" "}
                      <h2 className="Slider_teeth"> Staff.</h2>
                    </div>
                   
                    <div className="media_blocks">
                      <h2>Professionally Trained </h2> <h2>Dental Staff</h2>
                    </div>

                    <p className="mt-4">
                      "Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui
                      Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum
                      Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices
                      Posuere Cubilia Curae."
                    </p>
                    <button className="btn-banner btnbg">Read More</button>
                    <button className="btn-banner-consult btnbg2">
                      Consult a dentist
                    </button>
                  </div>
                </div>
              </div>
              {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 pt-5">
            <img
              src={i1}
              style={{ width: "430px" }}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
