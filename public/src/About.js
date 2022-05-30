import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './navbar'
import howToUseApp from './Api/howToUse';
import Footer from './Footer';
const About = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <Navbar />

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/main2.jpg" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h1 className="main-heading">How to use the Website?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Connect</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container main-hero-container">
                        <div className="row">
                                <p className="main-hero-para">
                                    College Port is a Website for college students. Due to covid, no one junior
                                    student can not contact the senior student. using CollegePort junior students contact
                                    to the senior and see where they are, where they have work job. Upcoming job Update, 
                                    Internship Opportunity, Interview Preparation and Study Material.
                                </p>
                                
                        </div>
      </section>

{/* 
      {/* 2nd part of bayt us section  */}

      {/* <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row"> */}
            {/* 1section right side data  */}
            {/* <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column"> */}
             
              {/* <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1> */}

              {/* {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })} */}

              {/* <br />
              <button className="btn-style btn-style-border">Connect with us</button>
            </div> */}

            {/* images section  */} 
            {/* <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/callcenter.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div> */}
      {/* </section> */}
      <Footer/>
    </>
  )
}

export default About