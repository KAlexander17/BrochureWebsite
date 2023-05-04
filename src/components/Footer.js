import React from "react";
import { Button } from './Button';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Sign up for our email listings for promotions and coupons!
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' 
                        name='email' 
                        placeholder='Your Email' 
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign-up</Link>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign-up</Link>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign-up</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                        <Link 
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link 
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link 
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;