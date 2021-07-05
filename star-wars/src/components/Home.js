import React from 'react'
import '../styles/Home.css'
import wall01 from '../img/wall01.jpg'


function Home() {
    return (
        <div className="Home">
            <h2>WELCOME TO THE STAR WARS WEBAPP</h2>
            <br />
            <img src={wall01} alt="" />
            <br />
            <footer>
                <p>// This web app was developed by Daniel Avzaradel as part of the Front End Developer Internship position. //</p>
            </footer>
        </div>
    )
}

export default Home
