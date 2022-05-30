import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

const Navbar = () => {

  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              CollegePort
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/service" >
                    Working
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <a>
                  <Button variant="contained" size="Medium">
                    Connect-with-us
                  </Button>
                </a>
              </form>
            </div>
          </div>
        </nav>
      </section>

    </>

  )
}

export default Navbar