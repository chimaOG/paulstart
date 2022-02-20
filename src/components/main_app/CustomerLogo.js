import React from 'react'

import logo from '../../assets/company_logos/60097c84b0ac197fa5cb6c59_Logo Ipsum 4.svg'

const CustomerLogo = (props) => {
    return (
        <div className = 'relative w-full md:w-1/5 h-20 flex items-center justify-center rounded-lg'>
            <img src={props.image} className='w-1/2' />
            <div className = 'opacity-40 hover:opacity-0 absolute top-0 left-0 w-full h-full bg-black'>
            
            </div>
        </div>
    )
}

export default CustomerLogo
