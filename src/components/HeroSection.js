import React from "react";
import '../App.css';
import './HeroSection.css';
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome to Luigi's!</h1>
            <p>Where you'll never leave hungry</p>
            <div className='hero-btns'>
                <Link to='/menu'>
                    <button>LOOK AT OUR MENU</button>
                </Link>
                <Link to='/about'>
                    <button>ABOUT THE LUIGI'S FAMILY</button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;