import React from 'react'

import CustomerLogo from './CustomerLogo';

const Customers = () => {

    function importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    const images = importAll(require.context('../../assets/company_logos', false, /\.(png|jpe?g|svg)$/));

    const imageList = Object.keys(images)

    const imageShowList = (imageList.map(key => (<CustomerLogo key = {images[key]} image = {images[key]} />)))

    
    return (
        <div id='customers' className='w-full flex flex-col justify-center items-center py-24 bg-bg_dark'>

            <div className = 'flex w-full flex-wrap justify-center  items-center my-20 px-20 md:px-0 gap-y-4 gap-x-2 md:gap-x-4 mx-16 md:ml-0 mb-10'>
                {imageShowList}
            </div>
            
        </div>
    )
}

export default Customers
 