import React, { useEffect, useState} from 'react'

import Axios from 'axios';
import {Routes, Route} from 'react-router-dom';

import SinglePage from './pages/SinglePage';
import Admin from './pages/Admin';

import SiteContext from './store/site-context';

function App() {

  const [imageData, setImageData] = useState(null);
  const [textData, setTextData] = useState(null);

  let context_value = {

  };
/*
  useEffect(() => {
      Axios.get('https://paul-star-backend-default-rtdb.firebaseio.com/images.json')
      .then(response => setImageData(response.data))

      Axios.get('https://paul-star-backend-default-rtdb.firebaseio.com/text.json')
      .then(response => setTextData(response.data))
            
  }, [])

  //console.log('running in app to create context');

  const context_value = {
    imageData: imageData,
    textData: textData,
    categories: ['personal', 'child', 'event'],
  }

  value = {context_value}
*/
  return (
    <SiteContext.Provider className="" value = {context_value} >
      <Routes>
        <Route path='/' element = {<SinglePage />}/>
        <Route path='/admin' element = {<Admin />}/>
      </Routes>
      
    </SiteContext.Provider>
  );
}

export default App;
