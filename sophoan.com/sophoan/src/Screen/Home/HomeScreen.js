import React from "react";
import { Link } from "react-router-dom";
import "../../../src/Style/Style.css";
 const HomeScreen = () =>{
    return (
    <div>
        <h1>HomeScreed</h1>
        <form>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"/><br/>
            <button><Link to="/Library">Login</Link></button><t/>
            <button>Sign Up</button>
        </form>
        
    </div>
        
    )
 }
 export default HomeScreen;