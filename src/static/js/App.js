import React, { useState } from 'react';
import { render } from 'react-dom';


import LoginForm from './LoginForm';
import ForgotPass from './ForgotPass';
import ResetPass from './ResetPass';

var i = 0;

const App = () => {
    
    const [user, setUser] = useState({username:"", password:""});
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [active, setActive] = useState("Login");
    
    const Forgot = details => {
    
        const requestOptions = {
            method: 'GET',
            headers: { 'access' : 'access' },
        };
        fetch('https://www.zeumatic.com/ehr/rest/reset.php?user='+details.email, requestOptions)
            .then(response => response.json())
            .then( data => resetHandler(data)).catch( error => console.log(error));

    };

    const resetHandler = data => {
        var obj = JSON.parse(data);
        if (obj.error_id == 200) {
            
            setMessage(obj.error_desc);
            console.log("estamos pasando por aqui");
            console.log({message});
            console.log("fin del mensaje");
            setActive("Reset");
            
        }else{
            setMessage(obj.error_desc);
        }
    }

    const Login = details => {

        var md5 = require('md5');
        var uppername = unescape( encodeURIComponent(  details.username.toUpperCase() ) );
        var md5Password = md5( details.username + details.password ).toString();
        
        const requestOptions = {
            method: 'GET',
            headers: { 'access' : 'access' },
        };
        fetch('https://www.zeumatic.com/ehr/rest/login.php?user='+details.username+'&passw='+md5Password, requestOptions)
            .then(response => response.json())
            .then( data => console.log(data)).catch( error => console.log(error));
        
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
        console.log("Logout");
    }

    return (
        <div className='App'>
            {(user.username != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button>Logout</button>
                </div>
            ) : (
                <div>
                    {active === "Forgot" && <ForgotPass Forgot={Forgot} Next = {Next} error={error} />}
                    {active === "Login" && <LoginForm Login={Login} Next={Next} error={error} />}
                    {active === "Reset" && <ResetPass Reset={Reset} Next = {Next} Message={message} error={error} /> }
                    {}
                </div>
            )}
        </div>
    )
}

render(<App />, document.getElementById("root"));