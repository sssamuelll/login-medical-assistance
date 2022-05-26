import React, { useState } from "react";
import Axios from "axios";


function ForgotPass({ Next, Message, error }) {

    const [details, setDetails] = useState({username: ""});

    const submitHandler = e => {
        e.preventDefault();
        Axios.get('https://www.zeumatic.com/ehr/rest/reset.php?user='+details.username)
            .then(response => resetHandler(response))
            .catch( error => console.log(error));
    }

    const resetHandler = response => {
        
        var data = JSON.parse(response.data);
        console.log(data);

        if (data.error_id == 200) {
            
            Message(data.error_desc);
            Next("Reset");
            
        }else{
            Message(data.error_desc);
        }

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
                  <label for="username">Username</label>
                  <input type="username" className="form-control" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
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