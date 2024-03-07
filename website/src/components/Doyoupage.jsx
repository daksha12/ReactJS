import React from "react";
import cards from "../json/Cardservice";
import Doyou from "./Doyou";
const Doyoupage = () => {
  return (
    <>
      {cards.map((item) => {
        console.log(item);

        return (
          <>
                <div className="col-sm-4 mycard">
                  <Doyou 
                    icon={item.icons}
                    title={item.heading}
                    desc={item.description}
                  />
                </div>
                {/* <div className="col-sm-4 mycard">
                  <Doyou />
                </div>
                <div className="col-sm-4  mycard">
                  <Doyou />
                </div> */}
             
           
          </>
        );
      })}
    </>
  );
};

export default Doyoupage;
