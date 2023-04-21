import React from "react";
import '../../App.css';
import './Menu.css';
import Spaghetti, { Alfredo } from "../MenuItems";
import { Ravioli, Lasagna } from "../MenuItems";

function Menu () {
    return (
        <>
            <h1>Our Menu</h1>
            <div class='row'>
                <div class='column'>
                    <Spaghetti />
                </div>
                <div class='column'>
                    <Ravioli />
                </div>
            </div>
            <div class='row'>
                <div class='column'>
                    <Lasagna />
                </div>
                <div class='column'>
                    <Alfredo />
                </div>
            </div>
        </>
    )
};

export default Menu;