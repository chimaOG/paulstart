import React,  {useState} from 'react';

import {AiOutlineMenu} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';

import 'animate.css';

import logo from '../../assets/logo.png';

const name_full = 'Paul Star';
const name_short = 'Paul Star Photography';

//yellow = bg-[#f2a70c]
//light grey = bg-[#021b29]
//dark grey = bg-[#01141f]



const Header = () => {

    const [menu, setMenu] = useState(false);
    const [removeLogoText, setRemoveLogoText] = useState(false);

    const showMenu = () =>{
        setMenu((prevState) => !prevState)
    }

    const logoText = () => {
        if(window.scrollY >= 200){
            setRemoveLogoText(true);
        } else {
            setRemoveLogoText(false);
        }
    };

    window.addEventListener('scroll', logoText);

    return (
        <div className = 'fixed top-0  w-full flex justify-center h-40 items-center transitions-all bg-transparent z-20' >
            <div className = 'fixed top-0 flex justify-between items-center px-5 md:px-10 w-full h-32 bg-transparent ' >
                <div className = 'flex flex-row items-center justify-center bg-amber-500 rounded-full p-4 md:ml-7 z-20'>
                    <img src={logo} alt = 'brand-logo' className = ' w-10 md:w-12'/>
                    {!removeLogoText && (
                        <p className="font-sans text-sm md:text-lg text-black text-center font-bold tracking-normal w-full">{name_full}</p>
                    )}
                    
                </div>

                <div className = 'flex-row justify-around z-20 items-center w-52 bg-transparent hidden md:flex animate__animated animate__fadeIn'>
                    <span className="animate-ping  inline-flex h-1.5 w-1.5 mx-1 rounded-full bg-amber-400 opacity-75"></span>
                    <p className="font-sans text-base text-amber-500 tracking-normal">Available for New Projects</p>
                </div>

                <div className={`${menu? 'mt-28' : ''}`}>
                    <div className = {`flex items-center justify-between bg-amber-500 z-20 ${menu? 'rounded-t-lg' : 'rounded-lg'} py-4 px-3 w-32 md:w-40 md:mr-7  ${menu? 'mt-20' : ''}`}
                    onClick={showMenu}>
                        <p className="font-sans text-sm md:text-lg text-black font-bold tracking-normal w-full ml-4">Menu</p>
                        {!menu && <AiOutlineMenu 
                                fontSize = {25}
                                className = {`animate__animated  ${menu? 'animate__fadeOut' : 'animate__fadeIn'}`} />}
                        {menu && <GrClose 
                                fontSize = {25}
                                className = {`animate__animated  ${menu? 'animate__fadeIn' : 'animate__fadeOut'}`}/>}
                        
                    </div>
                    {menu && (
                            <div className = {`flex flex-col items-around justify-center w-full bg-amber-500 rounded-br-lg w-32 md:w-40 px-3 py-2 ${menu? 'animate-fade-in-down' : 'animate-fade-out-up'} animate-fade-in-down  `}>
                                <div>
                                    <p className = 'font-sans text-sm md:text-lg text-black font-medium tracking-normal w-4/5 ml-4' >Portfolio</p>
                                </div>
                                <div>
                                    <p className = 'font-sans text-sm md:text-lg text-black font-medium mt-3 tracking-normal w-4/5 ml-4' >About me</p>
                                </div>
                                <div>
                                    <p className = 'font-sans text-sm md:text-lg text-black font-medium mt-3 tracking-normal w-4/5 ml-4' >Clients</p>
                                </div>
                                <div>
                                    <p className = 'font-sans text-sm md:text-lg text-black font-semibold mt-5 tracking-normal w-4/5 text-center animate__animated animate__pulse  animate__infinite' >Book a Session!</p>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Header
