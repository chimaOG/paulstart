import React from 'react'

import TextManagement from '../components/admin_app/TextManagement';
import ImageManagement from '../components/admin_app/ImageManagement';


const Admin = () => {
    return (
        <div className = 'w-full h-screen flex flex-col' style={{backgroundColor: 'rgba(2,27,41)'}}>
            <ImageManagement />
            <TextManagement />
        </div>
    )
}

export default Admin
