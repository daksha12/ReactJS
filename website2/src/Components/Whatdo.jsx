import React from 'react'
import "../Pages/Home/Home.css"
const Whatdo = (props) => {
  return (
   <>
   
   <div className="container">
        <div className="row">
              
        
   <div class="" Style={{width:"18px"}}>
  <div class="card-body">
    <h5 class="card-title mb-4">{props.heading}</h5>
   
    <p class="card-text ">{props.desc}</p>
   
  </div>
</div>

</div>
   </div>
   </>
  )
}

export default Whatdo