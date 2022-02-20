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
        <div className='w-full p-16 md:flex' style={{backgroundColor: 'rgba(2,27,41)'}}>

            <div className='w-full md:w-1/2' >

                <img 
                    src={photographer}
                    className = 'w-40 h-40 rounded-full border-2 border-amber-500 object-cover'
                    />

                <p className="font-sans w-11/12 text-3xl mt-10 md:text-6xl font-bold text-white tracking-normal">
                    Feel Inspired?
                </p>

                <p className = 'font-sans text-stone-400	text-xl mt-10'>
                    Lets connect! I'd love hear about your story and how I might be able 
                    to help through photography.                
                </p>

                <div className = 'bg-amber-500 p-4 w-2/5 md:w-3/5 flex items-center justify-around rounded-lg uppercase mt-10 mb-20 text-sm font-bold '>
                        Whatsapp Me
                </div>
            </div>

            <div className='w-full lg:w-1/2 p-10 pr-0 bg-amber-500 rounded-lg ml-5'>
                <form onSubmit={sendEmail} ref={form} >
                    <div className='flex w-full justify-center'>
                        <div className='w-1/2'>
                            <p>FIRST NAME</p>
                            <input type='text' className='mt-2 h-10 w-4/5 px-4' placeholder = 'First Name' name='firstName' />
                        </div>

                        <div className='w-1/2 ml-8  '>
                            <p>COMPANY</p>
                            <input type='text' className='mt-2  h-10 w-4/5 px-4' placeholder='Company' name='company'/>
                        </div>
                    </div>

                    <div className='flex w-full justify-center mt-10'>
                        <div className='w-1/2'>
                            <p>E-MAIL</p>
                            <input type='email' className='mt-2 h-10 w-4/5 px-4' placeholder = 'E-mail' name='email' />
                        </div>

                        <div className='w-1/2 ml-8  '>
                            <p>PHONE NUMBER</p>
                            <input type='text' className='mt-2  h-10 w-4/5 px-4' placeholder='Phone Number' name='phoneNumber'/>
                        </div>
                    </div>

                    <div className='w-11/12 mt-10'>
                        <p>MESSAGE</p>
                        <textarea  className='mt-2 h-56 w-full px-4' name='message'/>
                    </div>

                    <div className='flex justify-end w-11/12'>
                        <button type='submit' value='send' className=' bg-black p-4 w-2/5 flex items-center justify-around rounded-lg uppercase mt-10 text-sm text-white font-bold '>
                            SEND EMAIL
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Booking
