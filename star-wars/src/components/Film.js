import React from 'react';
import {useParams} from 'react-router-dom';

function Film(film) {

    const {id} = useParams();
    console.log(film.film[id]);

    return (
        <>
        <div className="film">
            <h2> {film.film[id].title} </h2>
            <br />
            <p>{film.film[id].opening_crawl}</p>

        </div>
        
        </>
    )
}

export default Film;