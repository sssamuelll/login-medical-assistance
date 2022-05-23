import React, { useState } from 'react';
import { render } from 'react-dom';
import LoginForm from './LoginForm';

const App = () => {

    const adminUser = {
        username:"asd" ,
        password:"asd" ,
    }

    const [user, setUser] = useState({username:"", password:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        var md5 = require('md5');
        var uppername = unescape( encodeURIComponent(  details.username.toUpperCase() ) );
        
        var md5Password = md5(uppername + details.password);
        console.log(md5Password);

        
        const requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: details.username, passw: md5Password })
        };
        fetch('https://www.zeumatic.com/ehr/rest/login.php', requestOptions)
            .then(response => response.json())
            .then( data => console.log(data));
        
        
        
        /*
        if (details.username == adminUser.username && details.password == adminUser.password) {
            console.log("Logged in");
            setUser({
                username: details.username,
                password: details.password
            })
        } else {
            console.log("Details do not match");
            setError("Details do not match");
        }*/
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