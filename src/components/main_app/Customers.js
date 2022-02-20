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
        <div className='w-full flex flex-col justify-center items-center' style={{ backgroundColor:'#01141f'}}>

            <div className = 'flex w-full flex-wrap justify-center  items-center my-20 gap-y-4 md:gap-x-4 mx-16 md:ml-0 mb-10'>
                {imageShowList}
            </div>
            
        </div>
    )
}

export default Customers
 