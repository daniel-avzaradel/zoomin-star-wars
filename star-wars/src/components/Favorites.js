import React from 'react'
import '../styles/Favorites.css'
// import React, {useEffect, useRef} from 'react'


function Favorites() {

    // let localParse = useRef();

    // useEffect(() => {
    //     if(localStorage.favorites.length > 0){
    //         localParse = JSON.parse(localStorage.favorites)
    //         console.log(localParse);
    //     } else if(localParse === undefined || localParse === null) {
    //         console.log('local is undefined');
    //     }
    // }, [])

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
