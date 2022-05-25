import React, { useState } from "react";

function ResetPass({ Next, Message, error }) {
    

    const backHandler = e => {
        e.preventDefault();
        Next("Forgot");
    }

    return (

        <div>
            <div className="overlay__inner">
                <h1 className="overlay__title">
                    Login UX
                </h1>
                <p className="overlay__description">Check your mail</p>
                <p>{Message}</p>
                {(error !="") ? ( <div className="error">{error}</div> ) : ""}
            </div>

            <div className="overlay__bottom">
                <p>Did not receive the email? Check your spam filter</p>
                <a href="" onClick={backHandler}>or try another email address</a>
            </div>
        </div>
        
    )

}

export default ResetPass