import React from 'react';
import {useHistory} from "react-router-dom";




function LoginPage ({toggleAuth}) {

    const history = useHistory()

    function signIn(){
        toggleAuth(true);
        history.push("/blogposts")
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Klik hier op de knop om in te loggen</p>
            <button type="button" onClick={signIn}>
                inloggen
            </button>
        </div>
    );
};

export default LoginPage;