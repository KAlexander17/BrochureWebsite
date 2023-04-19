import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome to Luigi's!</h1>
            <p>Where you'll never leave hungry</p>
            <div className='hero-btns'>
                <Link to='/menu'>
                    <Button>LOOK AT OUR MENU</Button>
                </Link>
                <Link to='/about'>
                    <Button>ABOUT THE LUIGI'S FAMILY</Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;