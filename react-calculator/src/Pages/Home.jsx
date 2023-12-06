import React from 'react'
import Head from '../Nav-Bar/Header'
import gif from '../Icons/mathBrain.gif'
import Math_GIF from '../Icons/Math_GIF.gif'
import '../Style/Home.css'

const Home = () => (
    <body>
        <Head />
        <div className="MathGif">
            <img src={Math_GIF} alt="math" />
        </div>
        <section className="home-container">
            <div>
                <h2 className="subtitle">Welcome to My page!</h2>
                <div className="description">
                    <p className="text">
                        <b>Math magicians</b>
                        {' '}
                        is a website for all fans of mathematics.
                        <br/>
                        It is a Single Page App <abbr title='Single Page App'>(SPA)</abbr> that allows users to:
                    </p>
                    <ul>
                        <li className="listItem">Make simple calculations.</li>
                        <li className="listItem">Read a random math-related quote.</li>
                    </ul>
                    <p>
                        The app is developed using
                        {' '}
                        <i>React,</i>
                        {' '}
                        and styled through the
                        {' '}
                        <i>React basic styling.</i>
                        {' '}
                        Navigation is made possible through
                        {' '}
                        <i>React Router.</i>
                    </p>
                </div>
            </div>
            <div className="home-img">
                <img src={gif} alt="math" />
            </div>
        </section>
    </body>
);

export default Home;