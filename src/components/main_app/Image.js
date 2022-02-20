import React from 'react'

const Image = ({image}) => {

    
    return (
        <div className='relative w-full md:w-1/5 rounded-lg flex items-center' >
            
            <img 
                src = {image}
                alt = 'portfolio-image'
                className = 'w-full object-contain rounded-lg'
            />
            <div className = 'flex justify-center items-center opacity-0 hover:opacity-80 absolute top-0 left-0 w-full h-full bg-amber-500 rounded-lg'>
                <button
                    type='button'
                    className=' bg-black text-white rounded-lg rounded-full px-3 py-1 opacity-100'
                >
                    <span className ='font-sans font-semibold text-white text-base opacity-100'>View</span>
                </button>
            </div>
        </div>
    )
}

export default Image
