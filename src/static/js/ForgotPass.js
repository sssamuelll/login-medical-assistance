import React, { useState } from "react";


function ForgotPass({ Forgot, Next, error }) {

    const [details, setDetails] = useState({email: ""});

    const submitHandler = e => {
        e.preventDefault();
        Forgot(details);
    }

    return (
        <form onSubmit={submitHandler}>
    
            <div className="overlay__inner">

                <h1 className="overlay__title">
                    Login UX
                </h1>
                <p className="overlay__description">Reset Password</p>

                <p>Enter the username associated with your account and we'll send an email with instructions to reset your password.</p>

                {(error !="") ? ( <div className="error">{error}</div> ) : ""}

                <div className="overlay__form">

                <div className="form-group">
                  <label for="username">Email</label>
                  <input type="email" className="form-control" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                
            </div>


            <div className="form-group overlay__btns">

                <button type="submit" className="overlay__btn overlay__btn--transparent">
                  
                    Send Instructions
                  
                </button>

              </div>

            </div>
    
        </form>
        
    )

}

export default ForgotPass