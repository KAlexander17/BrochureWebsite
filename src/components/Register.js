import React, { useState } from "react";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <div className='auth-form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Full name</label>
                <input value={name} name='name' id='name' placeholder='Full name' />
                <label htmlfor='email'>Email</label>
                <input value={email} type='email' placeholder='Your email' id='email' name='email' />
                <label htmlfor='password'>Password</label>
                <input value={pass} type='password' placeholder='Your password' id='password' name='password' />
                <button type='submit'>Log in</button>
            </form>
            <p>Already have an account? Login here</p>
            </div>
        </>
    )
}