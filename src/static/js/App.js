import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Axios } from "axios";

import LoginForm from './LoginForm';
import ForgotPass from './ForgotPass';
import ResetPass from './ResetPass';
import RenewPass from './RenewPass';
import Dashboard from './Dashboard';

var i = 0;

const App = () => {
    
    const [user, setUser] = useState({username:"", password:""});
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [active, setActive] = useState("Login");
    
    /*
    const Login = details => {

        var md5 = require('md5');
        var uppername = unescape( encodeURIComponent(  details.username.toUpperCase() ) );
        var md5Password = md5( details.username + details.password ).toString();
        
        const requestOptions = {
            method: 'GET',
            headers: { 'access' : 'access' },
        };IrPs8xcGQZYxW
            .then( data => console.log(data)).catch( error => console.log(error));

    }*/

    const User = user => {

        setUser(user);

    }

    const Message = e => {

        setMessage(e);

    }

    const Next = e => {

        setActive(e);

    };

    const Reset = details => {

        console.log(details);

    };

    const Logout = () => {

        setUser({
            username:"", email: ""
        });
        Next("Login");
        

    }

    return (

        <div className='App'>
            {(user.username != "" && active != "Renew") ? (
                <div className="welcome">
                    
                    {active === "Dashboard" && <Dashboard User = {User} user = {user} Next = {Next} Message={message} error={error} Logout={Logout}/> }
                    
                </div>
            ) : (
                <div>
                    {active === "Forgot" && <ForgotPass Next = {Next} Message = {Message} error={error} />}
                    {active === "Login" && <LoginForm User = {User} Next = {Next} error={error} />}
                    {active === "Reset" && <ResetPass Reset={Reset} Next = {Next} Message={message} error={error} /> }
                    {active === "Renew" && <RenewPass User = {User} user = {user} Next = {Next} Message={message} error={error} /> }
                    
                </div>
            )}
        </div>

    )
}

render(<App />, document.getElementById("root"));