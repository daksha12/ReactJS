import React from 'react'
import Header from '../../Components/Header.jsx'
import Images from "../../Json/Gallery.js"

const Gallerypage = () => {
    return (
        <>

<div className="container-fluid">
        <div className="row">
          <div className=" About_banner_img"></div>
        </div>
      </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                      <center>  <h2>Gallery</h2> </center>
                    {Images.map((item) => {

                        return (
                            <>
                                <div className="col-md-3  col-6 mt-3">

                                    <img src={item.img} className='img-fluid photos' alt="" />
                                
                                </div>
                            </>
                        )


                    }
                    )}

                </div>
            </div>
<Header/>
        </>
    )
}

export default Gallerypage;