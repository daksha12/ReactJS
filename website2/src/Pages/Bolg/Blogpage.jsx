import React from 'react'
import News from '../../Components/News'
import NewsData from '../../Json/News';

const Blogpage = () => {
  return (
    <>
    
    <div className="container-fluid">
        <div className="row">
          <div className=" About_banner_img"></div>
        </div>
      </div>
      
    <div className="container mt-5">
        <center>
          {" "}
          <h1 className="heds pt-5 mt-5">Latest News</h1>
        </center>
        <div className="mt-5">
          <div className="d-flex gap-3 latest">
            {NewsData.map((item) => {
              console.log(item);

              return (
                <>
                  <div className="img_lp">
                    <img
                      src={item.photo}
                      className="photos_lp img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <p>{item.desc}</p>
                    <h2 className="mt-3 font_wight">{item.heading}</h2>
                    <p className="para_news">{item.paragraph}</p>
                    {/* <a href="#" className=" btn btn-mybtn  btn-banner">View Post</a> */}
                    <button className="btn-banner">View Post</button>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="mt-5">
          <div className="d-flex gap-2 latest">
            {NewsData.map((item) => {
              console.log(item);

              return (
                <>
                  <div className="mt-5 pe-4">
                    <p>{item.desc}</p>
                    <h2 className="mt-3 font_wight">{item.heading}</h2>
                    <p className="para_news">{item.paragraph}</p>
                    {/* <a href="#" className=" btn btn-mybtn  btn-banner">View Post</a> */}
                    <button className="btn-banner">View Post</button>
                  </div>

                  <div className="img_lp">
                    <img
                      src={item.photo}
                      className="photos_lp img-fluid"
                      alt=""
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>

    <div className="mt-5">
          <div className="d-flex gap-3 latest">
            {NewsData.map((item) => {
              console.log(item);

              return (
                <>
                  <div className="img_lp">
                    <img
                      src={item.photo}
                      className="photos_lp img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="mt-5">
                    <p>{item.desc}</p>
                    <h2 className="mt-3 font_wight">{item.heading}</h2>
                    <p className="para_news">{item.paragraph}</p>
                    {/* <a href="#" className=" btn btn-mybtn  btn-banner">View Post</a> */}
                    <button className="btn-banner">View Post</button>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="mt-5 mb-5">
          <div className="d-flex gap-2 latest">
            {NewsData.map((item) => {
              console.log(item);

              return (
                <>
                  <div className="mt-5 pe-4">
                    <p>{item.desc}</p>
                    <h2 className="mt-3 font_wight">{item.heading}</h2>
                    <p className="para_news">{item.paragraph}</p>
                    {/* <a href="#" className=" btn btn-mybtn  btn-banner">View Post</a> */}
                    <button className="btn-banner">View Post</button>
                  </div>

                  <div className="img_lp">
                    <img
                      src={item.photo}
                      className="photos_lp img-fluid"
                      alt=""
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default Blogpage