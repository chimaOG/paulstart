import React from 'react'
import {Image} from 'cloudinary-react';


const AdminImage = ({cloudinaryID, category}) => {
    console.log(category)
    return (
        <div className = 'bg-amber-700 p-3 m-3 flex flex-col items-center justify-around rounded-xl'>
            <Image  cloudName='dhdzo61wo' publicID={cloudinaryID} className='w-40 h-60 object-cover'/>

            <p className = 'p-4 text-white m-2 bg-black rounded-lg h-10 flex items-center justify-center'>{category}</p>

            <button className = 'p-4 text-white m-2 bg-black rounded-lg h-10 flex items-center justify-center'>
                Delete
            </button>
        </div>
    )
}

export default AdminImage
