import React from 'react'

const Intro = () => {
    return (
        <div className = 'w-full flex flex-col lg:flex-row items-center lg:px-10 xl:px-40 2xl:px-48' style={{backgroundColor: 'rgba(2,27,41)'}}>
            <div className = 'w-full hidden lg:flex lg:w-1/2 flex flex-col items-center'>
                <img src = 'https://cdn.pixabay.com/photo/2021/12/13/09/46/moto-bikes-6867911__340.jpg' 
                className = 'w-3/4 xl:w-1/2 object-contain ml-32 rotate-12' />

                <img src = 'https://cdn.pixabay.com/photo/2022/01/22/12/51/mallorca-6957128__340.jpg'
                className = 'w-3/4 xl:w-1/2 object-contain ml-32 -rotate-12' />
            </div>

            <div className='flex flex-col  md:ml-10  w-11/12 lg:w-1/2 '  >
                <div className = 'my-20'>
                    <p className="font-sans w-11/12 md:w-10/12 2xl:w-7/12 text-3xl ml-7 md:text-5xl  lg:text-6xl font-bold text-white tracking-normal">
                        Why I fell in love with photography
                    </p>
                    <div className = 'font-sans text-text_grey	text-base ml-7 mt-10 w-11/12 md:w-10/12 2xl:w-9/12'
                        style={{lineHeight: '2 rem'}}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
                            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus 
                            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>

                        <p className = 'mt-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, 
                            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus 
                            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>

                                      
                    </div>
                </div>
                <div className = 'bg-main_yellow p-4 w-5/6 p-4 md:w-3/5 flex items-center justify-around rounded-lg uppercase mb-20 text-sm font-bold '>
                    WORK WITH ME
                </div>
            </div>
        </div>
    )
}

export default Intro
