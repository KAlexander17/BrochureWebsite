import React from "react";
import '../../App.css';
import './About.css';

function About() {
    return (
        <>
            <div className='container'>
                <h1>About our family</h1>
                <p>
                    Luigi's started in 2001 and has been serving only the best for authentic Italian cuisine
                    since we opened. All of our ingredients are prepared here in house and are as fresh as fresh
                    can get!
                </p>
                <p>
                    Luigi's was started by Luigi Ricci after he immigrated to the United States from Italy back
                    in 1998, and he wanted to bring the taste of Italy to the US! From fresh and savory spaghetti
                    to creamy, sweet cannolis, Luigi's has only the best Italian cuisine!
                </p>
            </div>
            <div className='container'>
                <h1>Interested in joining the team?</h1>
                <p>
                    Come inside for a paper application! We are currently hiring for:
                </p>
                <ul>
                    <li>Servers</li>
                    <li>Cooks</li>
                </ul>
            </div>
        </>
    )
};

export default About;