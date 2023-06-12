import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <div className='auth-form-container'>
                        <h1 className='modal-header'>Register</h1>
                        <div className='modal-body'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='name'>Full name</label>
                                <input name='name' id='name' placeholder='Full name' />
                                <label htmlfor='email'>Email</label>
                                <input type='email' placeholder='Your email' id='email' name='email' />
                                <label htmlfor='password'>Password</label>
                                <input type='password' placeholder='Your password' id='password' name='password' />
                                
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button onClick={function subscription() {
                                alert('Thank you! You are now registered and logged in!')
                            }}type='button'>Register</button>
                        </div>
                        <div>
                            <Link to='/sign-up'>Back to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}