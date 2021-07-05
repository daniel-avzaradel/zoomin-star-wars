import React from 'react';
import {useParams} from 'react-router-dom';

function Film(film) {

    const {id} = useParams();
    
    return <h2 style={{padding: '20px'}}> {film.film[id].title} </h2>;
}

export default Film;