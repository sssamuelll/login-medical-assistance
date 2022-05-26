import React, { useState } from "react";
import Axios from "axios";


function RenewPass({ User, user, Next, error }) {

    const [details, setDetails] = useState({newPassword: "", confirmPassword:""});

    const submitHandler = e => {
        e.preventDefault();
        if (details.newPassword == details.confirmPassword) {
            
            var md5 = require('md5');
            var md5newPassword = md5( user.username + details.newPassword ).toString();
            
            var md5Password = md5( user.username + user.password ).toString();
            console.log("current");
            console.log(md5Password);
            console.log("new");
            console.log(md5newPassword);

            Axios.get('https://www.zeumatic.com/ehr/rest/change.php?user='+user.username+'&current='+md5Password+'&new='+md5newPassword)
            .then(response => respHandler(response)).catch( error => console.log(error));

        } else {
            console.log("error");
        }
    };

    const respHandler = response => {

        var data = JSON.parse(response.data);
        console.log(data);
        if (data.error_id == 200) {

            console.log("eureka");
            User({password:details.newPassword});
            Next("Dashboard");

        } else {
            console.log("eureko");    
        }

    };

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