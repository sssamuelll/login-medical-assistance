import React, { useState } from 'react';
import { render } from 'react-dom';
import LoginForm from './LoginForm';

const App = () => {

    const [user, setUser] = useState({username:"", password:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        var md5 = require('md5');
        var uppername = unescape( encodeURIComponent(  details.username.toUpperCase() ) );
        var md5Password = md5( details.username + details.password ).toString();
        console.log(md5Password);
        
        const requestOptions = {
            method: 'GET',
            headers: { 'access' : 'access' },
        };
        fetch('https://www.zeumatic.com/ehr/rest/login.php?user='+details.username+'&passw='+md5Password, requestOptions)
            .then(response => response.json())
            .then( data => console.log(data)).catch( error => console.log(error));
        
    }

    const Logout = () => {
        setUser({
            username:"", email: ""
        });
        console.log("Logout");
    }

    return(
        <div className='App'>
            {(user.username != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button>Logout</button>
                </div>
            ): (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    )
}

render(<App />, document.getElementById("root"));