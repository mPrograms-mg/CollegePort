import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import Services from '../Services';
import PageNotFound from '../Error/PageNotFound';
import External from '../External';
import Comming from '../Commingsoon';
import Findclg from '../Findclg';


const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<PageNotFound/>} />
                <Route path="/redirect" element={<External/>}/>
                <Route path="/Commingsoon" element={<Comming/>}/>
                <Route path="/college" element={<Findclg/>}/>
            </Routes>
        </>
    )
}

export default Router;