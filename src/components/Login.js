import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <div className='auth-form-container'>
            <h1>Sign up and get special discounts and even free desserts with certain purchases!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlfor='email'>Email</label>
                <input type='email' placeholder='Your email' id='email' name='email' />
                <label htmlfor='password'>Password</label>
                <input type='password' placeholder='Your password' id='password' name='password' />
            </form>
            <button type='submit'>Log in</button>
            <p>Don't have an account?</p>
            <button>Register here</button>
            </div>
        </>
    )
}