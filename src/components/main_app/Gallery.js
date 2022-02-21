import React, {useState} from 'react'

import 'animate.css';

import Image from './Image';
import SiteContext from '../../store/site-context';


const Gallery = (props) => {

    const [showHidden, setShowHidden] = useState(false);


    const images = props.images //importAll(require.context(`../../assets/gallery_1`, false, /\.(png|jpe?g|svg)$/));

    const imageList = Object.keys(images)

    const images_show = imageList.splice(4,(imageList.length-4))
    const images_hidden = imageList.splice(0, 4)

    const imageHideList = (images_show.map(key => (<Image key = {images[key]} image = {images[key]} />)))
    const imageShowList = (images_hidden.map(key => (<Image key = {images[key]} image = {images[key]} />)))
    


    return (
        <div className= 'w-full'>
            <div className = 'flex items-center md:justify-between w-full mb-10'>
                <div className = 'ml-8 md:ml-16'>
                    <span className = 'font-sans font-bold text-main_yellow text-xl'>{props.number}/ </span>
                    <span className = 'font-sans font-bold text-white text-2xl ml-2'> {props.title}</span>
                </div>
                <div className = 'hidden md:flex md:items-center md:justify-between mr-20'>
                    <div className = 'h-10 font-sans font-semibold text-text_grey bg-bg_light	text-xs rounded-full px-4 flex items-center mr-4'
                    >
                        Real estate
                    </div>
                    <div className = 'h-10 font-sans font-semibold text-text_grey bg-bg_light	text-xs rounded-full px-4 flex items-center'
                    >
                        Interior design
                    </div>
                </div>
            </div>
            <div className = 'flex flex-wrap justify-center  items-center px-10 gap-y-4  md:px-0 md:gap-x-4  md:ml-0 mb-10'>
                {
                    imageShowList
                }
            </div>
                {showHidden && 
                    <div className =  {`flex flex-wrap justify-center  items-center  px-10 gap-y-4  md:px-0 md:gap-x-4  md:ml-0 mb-5 animate__animated ${showHidden? 'animate__fadeIn animate__slow' : 'animate__fadeOut animate__slow'}`}>
                        {imageHideList}
                    </div>
                }
            
            <div className = 'w-full flex justify-center items-center md:ml-2/3'>
                <button
                    type='button'
                    className='w-5/6 md:w-96 h-10 bg-main_yellow text-white rounded-lg rounded-lg px-3 py-1 opacity-100 mb-12 xl:mb-28'
                    onClick={() => {
                        setShowHidden(!showHidden)
                    }}
                >
                    <span className ='font-sans font-bold text-black text-xl opacity-100'>{`${showHidden? 'SHOW FEWER IMAGES' : 'VIEW FULL GALLERY'}`}</span>
                </button>
            </div>
            
        </div>
    )
}

export default Gallery
