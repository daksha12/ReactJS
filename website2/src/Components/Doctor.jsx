import React from 'react'
import Doctors from '../Json/Doctor';
import "../Pages/Home/Home.css"
import "../Pages/About/About.css"
const Doctor = () => {
  return (
   <>
   <div className="container mt-5">
    <center> <h1 className='mb-5 begental'>Our Doctors</h1></center>
    <div className="d-flex justify-content-center gap-5 Doctors_list">

        
   {Doctors.map((item) => {
          console.log(item);

          
                
           
          return (
            <>
            <div>
               <img src={item.photos} className='photos_border mb-4' alt="" />
              <h4 className='bottom_title'>{item.h3}</h4>
              <p className='bottom_para'>{item.p}</p>
                </div>
            </>
            
          );
          
        })}
        </div>
   </div>
   </>
  )
}

export default Doctor