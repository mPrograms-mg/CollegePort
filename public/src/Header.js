import React from 'react'
//import { Button } from '@mui/material'
import './styles/header.css'

const Header = () => {
    return (
        <>
            <header>
                <header>
                    <section className="container main-hero-container">
                        <div className="row">
                            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
                                <h1 className="display-2">
                                    College Portal <h2>Easy For You.</h2>
                                </h1>
                                <p className="main-hero-para">
                                    College Port is a Website for college students. Due to covid, no one junior
                                    student can not contact the senior student. using CollegePort junior students contact
                                    to the senior and see where they are, where they have work job. Upcoming job Update, 
                                    Internship Opportunity, Interview Preparation and Study Material.
                                </p>

                                <div className="input-group mt-3">
                                    <input
                                        type="text"
                                        className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="input-group-button">
                                        Click
                                    </div>
                                </div>
                            </div>
                            {/*  --------------- main header right side--------------  */}
                            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                                <img
                                    src="./images/MainHero3.png"
                                    alt="heroimg"
                                    className="img-fluid"
                                />
                                <img
                                    src="./images/MainHero2.png"
                                    alt="heroimg4"
                                    className="img-fluid main-hero-img2"
                                />
                            </div>
                        </div>
                    </section>
                </header>
            </header>
        </>
    )
}
export default Header