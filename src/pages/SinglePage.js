import React, {useContext, useEffect, useState} from 'react'

import {Banner, Booking, Customers, Footer, Intro,  Header, Portfolio} from '../components/main_app';


const SinglePage = () => {
 //   ctx = useContext()

    

    return (
        <div className= ''>
            <Header />
            <Banner />
            <Portfolio />
            <Intro />
            <Customers />
            <Booking />
            <Footer />
        </div>
    )
}

export default SinglePage
