import React from 'react'
import Logo from '../components/images/bacimg.jpg'
import "../App.css";
const Aboutheader = (props) => {
  return (
    <>



    <div className='allheader d-flex justify-content-center flex-wrap'>
            <div className="allheader_content">
                <h1><a href="#">{props.mytitle}</a></h1>
                <h4 className='allheader_content_link'><a href="#">Home &gt;&gt;</a> {props.smalltitle}</h4>
           
            </div>
    </div>
    
    </>
  )
}

export default Aboutheader