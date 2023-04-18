import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome to Luigi's!</h1>
            <p>Where you'll never leave hungry</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>LOOK AT OUR MENU</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>ABOUT THE LUIGI'S FAMILY
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;