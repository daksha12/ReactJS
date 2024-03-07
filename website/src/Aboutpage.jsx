import React from 'react'
import Aboutfew from './components/Aboutfew'
import Aboutheader from './components/Aboutheader'
import Aboutpagecover from './components/Aboutpagecover'
import Aboutvideo from './components/Aboutvideo'
import Navbar from './components/Navbar'
import Test from './components/Test'

const Aboutpage = () => {
  return (
    <>
   
   <Aboutheader mytitle={"About Us"} smalltitle={"About"}/>
    <Aboutfew/>
    <Aboutvideo/>
    <Aboutpagecover/>
    <Test/>
   
    </>
  )
}

export default Aboutpage