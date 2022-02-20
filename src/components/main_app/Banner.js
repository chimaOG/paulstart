import React from 'react'

import photographer from '../../assets/photographer.png'

const Banner = () => {
    return (
        <div className=" w-full flex flex-col md:flex-row" style={{backgroundColor: 'rgba(2,27,41)'}}>
            <div className = 'mt-24 w-full flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col md:ml-10 mt-20  w-full md:w-2/5'  >
                    <p className="font-sans w-4/5 text-5xl ml-7 md:text-7xl  lg:text-8xl font-bold text-white tracking-normal z-10">
                        Welcome to Paul Star Photography
                    </p>
                    <p className = 'font-sans font-semibold text-stone-400	text-xl ml-7 mt-10 w-3/4 md:w-full'
                    style={{lineHeight: '2 rem'}}>
                        Based in Amsterdam, I specialize in conceptual photography and love to take photos with creativity and passion.
                    </p>
                    <div className = 'bg-amber-500 p-4 w-2/5 md:w-3/5 ml-7 flex items-center justify-around rounded-lg uppercase mt-10 mb-20 text-sm font-bold '>
                        Explore my Work.
                    </div>
                </div>
                <div className = 'flex justify-center md:justify-end items-center h-full w-full md:w-3/5'>
                    <img 
                    src={photographer}
                    className = 'w-4/5 h-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
