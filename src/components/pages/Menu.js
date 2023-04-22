import React from "react";
import '../../App.css';
import './Menu.css';
import Spaghetti, { Alfredo, Cannoli, Scampi, Tiramisu, Tortellini } from "../MenuItems";
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
            <div class='row'>
                <div class='column'>
                    <Scampi />
                </div>
                <div class='column'>
                    <Tortellini />
                </div>
            </div>
            <div class='row'>
                <div class='column'>
                    <Cannoli />
                </div>
                <div class='column'>
                    <Tiramisu />
                </div>
            </div>
            <h1>More menu items coming soon!</h1>
        </>
    )
};

export default Menu;