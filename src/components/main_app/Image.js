import React from 'react'

const Image = ({image}) => {

    
    return (
        <div className='relative w-full md:w-2/5 rounded-lg flex items-center' >
            
            <img 
                src = {image}
                alt = 'portfolio-image'
                className = 'w-full object-contain rounded-lg'
            />

        </div>
    )
}

export default Image
