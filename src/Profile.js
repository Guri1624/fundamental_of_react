import React, { useState } from "react";
function  Profile()
{
    const [loggedIn]=useState(3)
    return(
<div>
    {loggedIn==1?
    <h1>1</h1>
    :loggedIn==2?<h1>2</h1>
    :<h1>3</h1>}
</div>
    )
}
export default Profile;