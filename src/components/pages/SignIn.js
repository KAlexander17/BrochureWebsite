import React, { useState } from "react";
import { Register } from "../Register";
import { Login } from "../Login";
import './SignIn.css';

function SignIn() {
    const [currentForm, setCurrentForm] = useState('login');

    return (
        <>
            {
                currentForm === 'login' ? <Login /> : <Register />
            }
        </>
    )
}

export default SignIn;