import React from 'react'
import Home from "../component/Home";
import Services from "../component/Services";
import Serv from "../component/Serv";
import Enquiry from "../component/Enquiry";
import Faq from '../component/Faq';

const page = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <Serv/>
      <Enquiry/>
      <Faq/>
    </div>
  )
}

export default page
