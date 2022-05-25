import React, { useState } from "react";

function LoginForm({ Login, Next, error }) {
  
    const [details, setDetails] = useState({username: "", password: ""});
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    const forgetHandler = e => {
        e.preventDefault();
        Next("Forgot");
    }

    return (
        <form onSubmit={submitHandler}>
    
            <div className="overlay__inner">

                <h1 className="overlay__title">
                    Login UX
                </h1>
                <p className="overlay__description">Please sign in</p>

                {(error !="") ? ( <div className="error">{error}</div> ) : ""}

                <div className="overlay__form">

                <div className="form-group">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <a href="" onClick={ forgetHandler }>Forgot Password</a>
                  </label>
                </div>

              </div>


              <div className="form-group overlay__btns">

                <button type="submit" className="overlay__btn overlay__btn--transparent">
                  
                  Sign In
                  
                </button>

              </div>

            </div>
    
        </form>
        
    )
}

export default LoginForm