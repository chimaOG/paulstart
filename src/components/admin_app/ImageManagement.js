import React, {useState, useContext, useEffect} from 'react';

import GalleryManager from '../admin_app/GalleryManager';
import ImageUpload from '../admin_app/ImageUpload';


const ImageManagement = () => {
    

    return (
        <div className = 'flex flex-col items-center justify-around w-full' style={{backgroundColor: 'rgba(1,20,31)'}}>
            <ImageUpload />
            <GalleryManager />
        </div>
    )
}


export default ImageManagement;
