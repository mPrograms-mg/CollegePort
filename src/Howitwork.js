import React, { useState } from 'react'
import workapi from './Api/workApi'
const Howitwork = () => {

    const [workData, setWorkData] = useState(workapi);
    
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How We Help to Student</h1>
                    <div className="row">
                        {workData.map((data) => {
                            const { id, logo, title, info } = data
                            return (
                                <div key={id} className="col-12 col-lg-4 text-center work-container-subdiv" >
                                    {/* <i className={`fontawesome-styl${logo}`}></i> */}
                                    <h2 className="sub-heading">{title}</h2>
                                    <p className="main-hero-para w-100">{info}</p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

        </>
    )
}

export default Howitwork