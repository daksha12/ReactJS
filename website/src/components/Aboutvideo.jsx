import React from "react";
import "../App.css";
const Aboutvideo = () => {
  return (
    <>
      <div className="container videocontent">
        <div className="row text-center">
          <h1>
            Take A Tour Of My Office. A Video Presentation Of My Beautiful &
            Awesome Story.
          </h1>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            corrupti odit? At iure facere, porro repellat officia quas, dolores
            magnam assumenda soluta odit harum voluptate inventore ipsa maiores
            fugiat accusamus eos nulla. Iure voluptatibus explicabo officia.{" "}
          </p>
        </div>
        <div className="myvideo mt-5 mb-5">
          <div className="videoicon img-fluid">
            {/* <a> <i class="bi bi-play iconsize" href="https://www.w3schools.com/"></a></i> */}
            <a href="https://www.youtube.com/watch?v=JPT3bFIwJYA">
              <i className="bi bi-play-circle text-success iconsize"></i>
            </a>
          </div>
        </div>
      </div>



      
    </>
  );
};

export default Aboutvideo;
