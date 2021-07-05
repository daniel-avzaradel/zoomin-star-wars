import React from 'react';
import {useParams} from 'react-router-dom';
import '../styles/Film.css'

function Film(film) {

    const {id} = useParams();
    
    console.log(film.film[id]);
    let episode = ''

    switch(film.film[id].episode_id) {
        case 1: 
            episode = 'I';
            break;
        case 2: 
            episode = 'II';
            break;
        case 3: 
            episode = 'III';
            break;
        case 4: 
            episode = 'IV';
            break;
        case 5: 
            episode = 'V';
            break;
        case 6: 
            episode = 'VI';
            break;
        default:
            episode = '';
            break;
    }

    return (
        <>
        <div className="film">
            <h2> {film.film[id].title}: Episode {episode} </h2>
            <br />
            <p>{film.film[id].opening_crawl}</p>
            <br />
            <p>Directed by: {film.film[id].director}</p>
            <p>Produced by: {film.film[id].producer}</p>
        </div>
        
        </>
    )
}

export default Film;