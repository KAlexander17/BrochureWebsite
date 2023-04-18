import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>These are some of our favorites!</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

//Line 12 would be a good spot to add in images within the <CardItem> component