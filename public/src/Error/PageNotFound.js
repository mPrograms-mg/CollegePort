import React from 'react'
import '../styles/error.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const PageNotFound = () => {
  return (
    <>
      
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">
                    Look like you're lost
                  </h3>

                  <p className="h2">the page you are looking for not Found!</p>

                  <Link to="/" >
                    <Button variant="contained" size="Medium">Go To Home Page</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageNotFound