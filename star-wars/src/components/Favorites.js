import React from 'react'
import '../styles/Favorites.css'

function Favorites() {

    let localst = localStorage.getItem('favorites')
    

    return (
        <>

        <div className="favorites">
            <h2> Favorite Films: </h2>
            <div className="favorites-box">
                <ul>
                {/* {
                    localParse.map((item, i) => {
                        console.log(item);
                        return <li key={i}>{item}</li>;
                    })
                } */}
                </ul>
            </div>
            <br />
        </div>
        
        </>
    )
}

export default Favorites
