import React, { useState } from "react";

function ResetPass({ Reset, Next, error }) {
    const [details, setDetails] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Reset(details);
    }


}

export default ResetPass