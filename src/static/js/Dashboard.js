import React, { useState } from "react";

function Dashboard({ User, user, Next, error, Logout }) {

    return(
        <div>
            <h2>Welcome, <span>{user.username}</span></h2>
            <h1>Dashboard</h1>
            
        </div>
    )


}

export default Dashboard;