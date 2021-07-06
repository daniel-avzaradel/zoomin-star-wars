import React from 'react'
import '../styles/Favorites.css'
// import React, {useEffect, useRef} from 'react'


function Favorites() {

    let local = [];

    if(localStorage.favorites) {
       local = JSON.parse(localStorage.favorites)
    }

    return (
        <>

        <div className="favorites">
            <h2> Favorite Films: </h2>
            <div className="favorites-box">
                <ul>
                {
                    local.map((item, i) => {
                        console.log(item);
                        return <li key={i}>{item}</li>;
                    })
    
                }
                </ul>
            </div>
            <br />
        </div>
        
        </>
    )
}

export default Favorites
