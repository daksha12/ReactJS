import React from 'react'

const Doyou = (props) => {
  return (
   <>
   
   <div class="card">
            <h1><i class={props.icon}></i></h1>
            <h5>{props.title}</h5>
          
  <div class="card-body">
    <p class="card-text">{props.desc}</p>
  </div>
</div>
   
   </>
  )
}

export default Doyou