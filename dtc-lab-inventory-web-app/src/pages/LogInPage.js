import React, { useState } from "react";
import './LogInPage.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


export default function LogInPage() {
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const auth = getAuth();
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            //The code below needs to be changed to be more secure when time allots.
            //The place checking for the access token also needs to be updated for better security
            localStorage.setItem('accessToken', user.accessToken);
            localStorage.setItem('uID', user.uid);
            window.location.reload();
        }
        catch(error){
            setErrorMessage('Invalid Email or Password');
        }

        console.log('button pressed')
    }

    return(
        <div className="logInContainer">
            <div className="topBar">
                <button className="logInCancel">Cancel</button>
            </div>
            <div className="logInContent">
                <input className="logInInput" placeholder="email@domain.com" id="email" autoComplete="none"></input>
                <input className="logInInput" placeholder="password" id="password" type="password"></input>
                <button className="logInButton" onClick={handleLogin}>Log In</button>
            </div>
        </div>
    )
}