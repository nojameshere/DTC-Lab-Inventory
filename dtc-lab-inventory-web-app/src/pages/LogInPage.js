import React from "react";
import './LogInPage.css';

export default function LogInPage() {
    const handleLogin = () => {
        //login Logic here
        console.log('button pressed')
    }

    return(
        <div className="logInContainer">
            <div className="topBar">
                <button className="logInCancel">Cancel</button>
            </div>
            <div className="logInContent">
                <input className="logInInput" placeholder="username" id="username" autoComplete="none"></input>
                <input className="logInInput" placeholder="password" id="password" type="password"></input>
                <button className="logInButton" onClick={handleLogin}>Log In</button>
            </div>
        </div>
    )
}