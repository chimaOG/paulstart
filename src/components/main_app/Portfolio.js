import React from 'react'

import Gallery from './Gallery';

const Portfolio = () => {
    return (
        <div  
        className = 'flex flex-col justify-between items-start '
        style={{backgroundColor: 'rgba(1,20,31)'}}>
            <div className = ' md:ml-10 mt-20 mb-20'>
                <p className="font-sans w-4/5 text-5xl ml-7 md:text-6xl  lg:text-7xl font-bold text-white tracking-normal">
                    My Work
                </p>
                <p className = 'font-sans font-semibold text-stone-400	text-xl ml-7 mt-10 w-3/4 md:w-1/2'
                    style={{lineHeight: '2 rem'}}>
            Helping businesses through photography is what makes my job meaningful. Explore some of my recent work down below.                </p>
            </div>

            <div className = 'w-full'>
                <Gallery number= {'01'} className='mt-10' />
            </div>
            
        </div>
    )
}

export default Portfolio
