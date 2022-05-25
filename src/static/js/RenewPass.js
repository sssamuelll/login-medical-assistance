import React, { useState } from "react";


function RenewPass({ Renew, Next, error }) {

    const [details, setDetails] = useState({newPassword: "", confirmPassword:""});

    const submitHandler = e => {
        e.preventDefault();

        Renew(details);
    }

    return (
        <form onSubmit={submitHandler}>
    
            <div className="overlay__inner">

                <h1 className="overlay__title">
                    Login UX
                </h1>
                <p className="overlay__description">Create new password</p>

                <p>Your new Password must be different from previous used passwords.</p>

                {(error !="") ? ( <div className="error">{error}</div> ) : ""}

                <div className="overlay__form">

                <div className="form-group">
                  <label for="newPassword">New Password</label>
                  <input type="password" className="form-control" name="newPassword" id="newPassword" onChange={e => setDetails({...details, newPassword: e.target.value})} value={details.newPassword} />
                </div>

                <div className="form-group">
                  <label for="confirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword} />
                </div>

            </div>

            <div className="form-group overlay__btns">

                <button type="submit" className="overlay__btn overlay__btn--transparent">

                    Reset Password

                </button>

              </div>

            </div>

        </form>

    )

}

export default RenewPass