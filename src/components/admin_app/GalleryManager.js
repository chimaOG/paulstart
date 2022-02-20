import React, {useContext, useState, useEffect} from 'react';


import SiteContext from '../../store/site-context';
import AdminImage from './AdminImage';


const GalleryManager = () => {

    const site_ctx = useContext(SiteContext);
    const [ctxLoaded, setCtxLoaded] = useState(false);
    const [imagesShow, setImagesShow] = useState([]);

    const images = site_ctx.imageData
    
    

    const galleryHandler = () => {

        const allImages = [];

        console.log(images);

        for (let key of Object.keys(images)){
           
            allImages.push({
                id: images[key].id,
                category: images[key].imageCategory,
            });
        }
        
        
        setImagesShow(allImages)
        setCtxLoaded(true);
        
    }
    

    useEffect(() => {
        if(images !== null && images !== undefined){
            galleryHandler();
        } else{
            console.log('Image Bad');
        }
    }, [images])

    console.log(imagesShow)
    const imagesShowing = imagesShow.map((image) => (
       <AdminImage cloudinaryID = {image.id} category = {image.category}/>
    ));

    
     
    

    return (
        <div  className = 'flex flex-col justify-between items-center w-full'
            style={{backgroundColor: 'rgba(1,20,31)'}}
        >

        <div className= 'w-full flex justify-center items-center '>
            <p className="font-sans w-4/5 text-5xl  my-10 font-bold text-white text-center tracking-normal">
                Image Gallery
            </p>
        </div> 

        <div className='flex flex-wrap items-center justify-around'>
            {imagesShowing}
        </div>

          
            
            
        </div>
    )
}

export default GalleryManager
