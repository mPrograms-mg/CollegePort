import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>WHO WE ARE</h2>
                  <p className="main-hero-para">
                    CollegePort junior students contact
                    to the senior and see where they are, where they have work job.Upcoming job Update,
                    Internship, Interview Preparation and Study Material.
                  </p>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Material For</h2>
                  <ul>
                    <li>
                        <a href='https://www.interviewbit.com/'></a>
                    </li>
                    <li>
                      <a href="https://www.geeksforgeeks.org">Study</a>
                    </li>
                    <li>
                      <a href="https://www.tutorialspoint.com/index.htm ">Exam</a>
                    </li>
                    <li>
                      <a href="https://www.darshan.ac.in/gtu-study-material">GTU</a>
                    </li>

                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Job-Update</h2>
                  <ul>
                    <li>
                      <a href="#">Internship</a>
                    </li>
                    <li>
                      <a href="#">Job Opening</a>
                    </li>
                    <li>
                      <a href="#">Recruiters</a>
                    </li>

                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Connect-with-us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href='https://www.facebook.com/mahesh.kshirsagar.092/'
                        target="mahesh facebok"
                      >
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/9_2mahesh/"
                        target="9_2mahesh">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a href='https://twitter.com/mPrograms92'
                       target="mPrograms92">
                      <i className="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href='https://www.linkedin.com/in/mahesh-kshirsagar-a4b330173/'
                        target="mahesh-kshirsagar-a4b330173">
                      <i className="fab fa-linkedin-in fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Mahesh Kshirsagar. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer