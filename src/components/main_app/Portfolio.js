import React from 'react'

import Gallery from './Gallery';

const Portfolio = () => {
    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
       }

    const images1 = importAll(require.context(`../../assets/gallery_1`, false, /\.(png|jpe?g|svg)$/));
    const images2 = importAll(require.context(`../../assets/gallery_2`, false, /\.(png|jpe?g|svg)$/));

    console.log(images1);
    console.log(images2);

    return (
        <div 
        id = 'portfolio' 
        className = 'flex flex-col justify-between items-start lg:px-10 xl:px-40 2xl:px-48'
        style={{backgroundColor: 'rgba(1,20,31)'}}>
            <div className = ' md:ml-10 mt-20 mb-20'>
                <p className="font-sans w-4/5 text-5xl ml-7 md:text-6xl  lg:text-7xl font-bold text-white tracking-normal">
                    My Work
                </p>
                <p className = 'font-sans font-semibold text-text_grey	text-xl ml-7 mt-10 w-3/4 md:w-1/2'
                    style={{lineHeight: '2 rem'}}>
            Helping businesses through photography is what makes my job meaningful. Explore some of my recent work down below.                </p>
            </div>

            <div className = 'w-full'>
                <Gallery number= {'01'} title = {'Family Photography'} images={images1} className='mt-10' />
            </div>

            <div className = 'w-full mt-10'>
                <Gallery number= {'02'} title = {'Child Photography'} images={images2} className='mt-10' />
            </div>
            
        </div>
    )
}

export default Portfolio
