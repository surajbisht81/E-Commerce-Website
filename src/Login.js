import React, { useState } from 'react'
import "./Login.css"
import { NavLink, useHistory } from "react-router-dom"
import { auth } from './firebase';


function Login() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const history = useHistory();


   const signIn = (e) => {
       e.preventDefault();

       auth.signInWithEmailAndPassword(email, password)
           .then( (auth) => {
                  if(auth){
                      history.push("/");
                  }
           })
           .catch( error => alert(error.message))

   }

   const register = (e) => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
             .then( (auth) => {
                //  console.log(auth);
                 if(auth){
                     history.push("/");                   // if user is authenticated then go to the home page directly after register;
                 }
             })
             .catch( error => alert(error.message))         // if by chance we get any error then catch it and console it
   }

    return (
        <div className="login">
            <NavLink to='/'>
              <img className="login_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo_img"/>
            </NavLink>

            <div className="login_container">
                
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={ e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button class="login_signInButton" onClick={signIn} >Sign in</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON fake 
                    CLONE conditions of use & Sale. Please see 
                    our Privacy Notice, our Cookies Notice and our 
                    Interest-Based Ads Notice.
                </p>

                <button class="login_registerButton" onClick={register} > Create your Amazon Account </button>
            </div>
        </div> 
    )
}

export default Login


