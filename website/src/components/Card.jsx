import React from "react";
import data from "../json/data";
import Doyou from "./Doyou";
import Jsoncard from "./jsoncard";

const Card = () => {
  return (
    <>
      <div>
        <h5>hello</h5>
        <div className="container">
          <div className="row">
            {data.map((item) => {
              console.log(item);

              return (
                <>
                  <div className="col-4">
                    <Jsoncard
                      img={item.photos}
                      title={item.title}
                      desc={item.desc}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
