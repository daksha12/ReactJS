import React from "react";

const Test = (props) => {
  return (
    <>
      <div className="cards">
        <div class="card-body">
          <p class="card-text faa">
            <i className={props.iconss}></i>
            {props.desc}
          </p>
        </div>
        <div className="photo">
          <img src={props.images}  alt="" />
          
        </div>
      </div>
    </>
  );
};

export default Test;
