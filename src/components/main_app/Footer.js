import React from 'react';

import {FaInstagram} from 'react-icons/fa';
import {RiTwitterLine} from 'react-icons/ri';


const Footer = () => {
    return (
        <div className='p-10 flex flex-col md:flex-row justify-around md:justify-between items-center bg-main_yellow h-28 md:h-24 '>
            <div className = 'flex'>
                <div className = 'w-8 h-8 rounded-full text-main_yellow text-xl flex items-center justify-center' style = {{backgroundColor: '#01141f'}}>
                    <FaInstagram />
                </div>
                <div className = 'w-8 h-8  ml-8 rounded-full text-main_yellow text-xl flex items-center justify-center' style = {{backgroundColor: '#01141f'}}>
                    <RiTwitterLine />
                </div>
                <div className = 'w-8 h-8  ml-8 rounded-full text-main_yellow text-xl flex items-center justify-center' style = {{backgroundColor: '#01141f'}}>
                    <RiTwitterLine />
                </div>
            </div>

            <div>
                <a href='https://samuelogbonna.herokuapp.com' target='_blank'>
                    <p className = 'text-text_black font-bold mt-3'>Built by Samuel Ogbonna</p>
                </a>
            </div>
        </div>
    )
}

export default Footer
 