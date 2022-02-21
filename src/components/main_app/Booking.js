import React, {useRef} from 'react';

import photographer from '../../assets/photographer.png'
import emailjs from '@emailjs/browser';


const Booking = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v08a22s', 'template_a91oi9r', form.current, 'user_mgWsG9ppWrdMRiQI71E9v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }

    return (
        <div id='booking' className='w-full p-16 py-36 md:flex lg:px-10 xl:px-40 2xl:px-48 bg-bg_light' >

            <div className='w-full md:w-1/2 flex flex-col justify-center items-center' >

                <img 
                    src={photographer}
                    className = 'w-40 h-40 rounded-full border-2 border-main_yellow object-cover'
                    />

                <p className="text-center font-sans w-11/12 text-3xl mt-10 md:text-6xl font-bold text-white tracking-normal">
                    Feel Inspired?
                </p>

                <p className = ' text-center font-sans text-text_grey lg:w-4/5	text-xl mt-10'>
                    Lets connect! I'd love hear about your story and how I might be able 
                    to help through photography.                
                </p>

                <div className = 'bg-main_yellow p-4 w-3/5 md:w-3/5 flex items-center justify-around rounded-lg uppercase mt-10 mb-20 text-sm font-bold '>
                        Whatsapp Me
                </div>
            </div>

            <div className='w-full lg:w-1/2  p-5 md:p-10 md:pr-0 bg-main_yellow rounded-lg md:ml-5'>
                <form onSubmit={sendEmail} ref={form} >
                    <div className='flex flex-col md:flex-row w-full justify-center'>
                        <div className='w-full md:w-1/2'>
                            <p className = 'font-bold'>FIRST NAME</p>
                            <input type='text' className='mt-2 h-10 w-full md:w-4/5 px-4' placeholder = 'First Name' name='firstName' />
                        </div>

                        <div className='w-full md:w-1/2 md:ml-8  mt-8 md:mt-0'>
                            <p className = 'font-bold'>COMPANY</p>
                            <input type='text' className='mt-2  h-10 w-full md:w-4/5 px-4' placeholder='Company' name='company'/>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row w-full justify-center mt-10'>
                        <div className='w-full md:w-1/2'>
                            <p className = 'font-bold'>E-MAIL</p>
                            <input type='email' className='mt-2 h-10 w-full md:w-4/5 px-4' placeholder = 'E-mail' name='email' />
                        </div>

                        <div className='w-full md:w-1/2 md:ml-8 mt-8 md:mt-0'>
                            <p className = 'font-bold'>PHONE NUMBER</p>
                            <input type='text' className='mt-2  h-10 w-full md:w-4/5 px-4' placeholder='Phone Number' name='phoneNumber'/>
                        </div>
                    </div>

                    <div className='w-full md:w-11/12 mt-10'>
                        <p className = 'font-bold'>MESSAGE</p>
                        <textarea  className='mt-2 h-56 w-full px-4' name='message'/>
                    </div>

                    <div className='flex justify-center w-full md:w-11/12'>
                        <button type='submit' value='send' className=' bg-black p-4 w-4/5 flex items-center justify-around rounded-lg uppercase mt-10 text-sm text-white font-bold '>
                            SEND EMAIL
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Booking
