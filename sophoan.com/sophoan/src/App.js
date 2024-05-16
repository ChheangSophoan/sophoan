import React from 'react';
import HomeScreen from '../src/Screen/Home/HomeScreen';
import LibraryScreen from '../src/Screen/Library/LibraryScreen';
import AboutScreen from '../src/Screen/About/AboutScreen';
import LoginScreen from './Screen/Login/LoginScrean';

import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import "./App.css";
const App= () => {
  return(
    <BrowserRouter>
      <div>
        <div className='menu_main'>
            <Link className='menu_item' to="/">Home</Link>
            <Link className='menu_item' to="/Library">Library</Link>
            <Link className='menu_item' to="/About">About</Link>
            <Link className='menu_item' to="/Login">Login</Link>
        </div>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/Library" element={<LibraryScreen/>}/>
        <Route path="/About" element={<AboutScreen/>}/>
        <Route path='/Login' element={<LoginScreen/>}/>
        <Route path="/*" element={<h1>Page Not Found</h1>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;