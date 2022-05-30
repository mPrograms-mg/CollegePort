import React, { useState } from 'react'
import Navbar from './navbar'
import serviceapi from "./Api/serviceApi";
import Footer from './Footer';
const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi)
  return (
    <>
      <Navbar />

      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Connect with Senior
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info, conn } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                    <h2 className="main-hero-para">{conn}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Services