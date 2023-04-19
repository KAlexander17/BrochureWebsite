import React from "react";
import { Link } from 'react-router-dom';

function CardItem() {
    return (
        <>
            <Link>
                <img src='../public/ravioli.jpg' alt='Our signature ravioli in meat sauce'/>
                <div>
                    <h5>Placeholder</h5>
                </div>
            </Link>  
        </>
    )
}

export default CardItem;