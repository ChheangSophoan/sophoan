import React from 'react';
import HomeScreen from '../src/Screen/Home/HomeScreen';
import LibraryScreen from '../src/Screen/Library/LibraryScreen';
import AboutScreen from '../src/Screen/About/AboutScreen';


import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import "./App.css";
const App= () => {
  return(
    <BrowserRouter>
      <div style={{padding:20}}>
        <div className='menu_main'>
            <Link className='menu_item' to="/">Home</Link>
            <Link className='menu_item' to="/Library">Library</Link>
            <Link className='menu_item' to="/About">About</Link>
        </div>

      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/Library" element={<LibraryScreen/>}/>
        <Route path="/About" element={<AboutScreen/>}/>
        <Route path="/*" element={<h1>Page Not Found</h1>}/>
      </Routes>
      </div>
  
      
    
    </BrowserRouter>
  )
}
export default App;