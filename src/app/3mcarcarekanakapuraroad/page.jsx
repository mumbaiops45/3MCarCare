import React from 'react'
import Home from "../component/Home";
import Services from "../component/Services";
import Service from '../component/Service';
import Serv from "../component/Serv";
import Enquiry from "../component/Enquiry";
import Faq from '../component/Faq';
import About from '../component/About';

const page = () => {
  return (
    <div>
      <Home/>
      <About/>
      {/* <Services/> */}
      <Service/>
      {/* <Serv/> */}
      <Enquiry/>
      <Faq/>
    </div>
  )
}

export default page
