import React, {useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import 'animate.css';

import SiteContext from '../../store/site-context';



const ImageUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [publicID, setPublicID] = useState('');
    const [preview, setPreview] = useState(null);
    const [categorySelected, setCategorySelected] = useState(null)
    const [isLoading, setIsLoading] = useState(false);


    const siteContext = useContext(SiteContext);



    useEffect(() => {
        if (selectedFile){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            }

            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }

    }, [selectedFile])

    useEffect(() => {

       
        if (publicID !== '') {
            console.log(publicID);
            Axios.post('https://paul-star-backend-default-rtdb.firebaseio.com/images.json',{
                id: publicID,
                imageCategory: categorySelected,
        }).then(response => {
            setPreview(null);
            setSelectedFile(null);
            setCategorySelected(null);
            setIsLoading(false);
        })
        }

    }, [publicID])

    const uploadHandler = () => {
        
        setIsLoading(true);

        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded ',   
        });

        const form = new FormData();
        form.append('file', selectedFile);
        form.append("upload_preset", 'nud5pqs3')


        Axios.post('https://api.cloudinary.com/v1_1/dhdzo61wo/image/upload', form, {headers})
        .then(response => {
            setPublicID(response.data.public_id);
        })

    }

    
    const fileHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const categorySelectHandler = (event) =>{
        setCategorySelected(event.target.value)
    }


    return (
        <div className = 'font-sans flex flex-col w-full items-center justify-center p-3 mt-10 ' style={{backgroundColor: 'rgba(1,20,31)'}}>
            <div  className='flex flex-col items-center justify-around w-full md:w-4/5  border-2 border-black border-dashed bg-gray-400' >
                <div className = 'w-full flex justify-center items-center text-black text-4xl font-semibold my-2'>
                    <p>Upload New Images Here</p>
                </div>

                {preview && (<div className =' w-full h-full'>
                    <div className = 'flex flex-col items-center justify-center'>
                        <img src={preview}
                             className = 'object-cover h-96 center my-5'
                            />

                        <div className = 'flex flex-col items-center justify-around my-2'>
                            <p className='text-base font-semibold'> Select an image category:
                                <select id="select1" className='rounded-lg mx-2 text-center' onChange={categorySelectHandler}>
                                    <option value="">--Choose an Option--</option>
                                    {siteContext.categories.map(category => <option value={category} key={category}>{category}</option>)}
                                </select>
                            </p>
                            
                            <button className = {` w-4/5 md:w-3/5 bg-amber-500 text-xl font-semibold rounded-lg my-10 p-3 ${isLoading? 'animate__animated animate__flash animate__slow  animate__infinite' : ''} ${categorySelected? 'opacity-100' : 'opacity-50' }`}
                                    onClick={uploadHandler}
                                    disabled = {!categorySelected}>
                                {isLoading? 'Uploading This Image' : 'Upload This Image'}
                            </button>
                        </div>
                </div>
                </div>)}

                {!preview && (<div className='w-full flex justify-center items-center'>
                    <input type='file' accept = 'image/*' className='my-2 ml-32' onChange={fileHandler}/>
                    </div>)}
            
        </div>
    </div>
            )
}

export default ImageUpload
