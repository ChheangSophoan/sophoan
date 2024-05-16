import React from "react";
import '../../../src/Style/Style.css';

const LoginScreen=()=>{
    return (
        <div class="main">  	
            <input type="checkbox" id="chk" aria-hidden="true"/>
                <div class="login">
                    <form style={{marginTop:180}}>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required=""/>
                        <input type="password" name="pswd" placeholder="Password" required=""/>
                        <button>Login</button>
                    </form>
			</div>
	    </div>
    )
}
export default LoginScreen;