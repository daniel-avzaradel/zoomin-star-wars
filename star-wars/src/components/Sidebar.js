import React from 'react';
import '../styles/Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = ({films}) => {
    return(
        <div className="Sidebar">
            <h1>STAR WARS FILMS</h1>
            <br />
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <br />
                {films.map((item, i) => {
                    return(
                        <Link to={'/films/'+ i} key={i}>
                        <li className="film-li">
                            {item.title}
                        </li>
                        </Link>
                    )
                })}
                <br />
                <Link to='/favorites'>
                    <li>Favorites</li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar;