import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/Film.css'

function Film(film) {

    const {id} = useParams();
    const movies = useRef([])

    let episode = ''

    switch(film.film[id]) {
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

    function favorite() {

        if(movies.current.includes(film.film[id].title)) {
            console.log('already exists');
        } else {
            movies.current.push(film.film[id].title)
            console.log(movies.current);
            localStorage.setItem('favorites', JSON.stringify(movies.current));

        }
        
        // setMovies([...movies, film.film[id].title])
        // localStorage.setItem('film', film.film[id].title)
    }

    useEffect(() => {

    }, [movies])

    return (
        <>
        <div className="film">
            <h2> {film.film[id].title}: Episode {episode} </h2>
            <br />
            <p>{film.film[id].opening_crawl}</p>
            <br />
            <p>Directed by: {film.film[id].director}</p>
            <p>Produced by: {film.film[id].producer}</p>
            <br />
            <button className="favorite" onClick={() => favorite()} >Favorite <i className="far fa-star"></i></button>
        </div>
        
        </>
    )
}

export default Film;