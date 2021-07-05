import React from 'react';
import '../styles/Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = ({films}) => {
    console.log(films);
    return(
        <div className="Sidebar">
            <h1>STAR WARS FILMS</h1>
            <br />
            <ul>
                {films.map((item, i) => {
                    return(
                        <Link to={'/'+item.episode_id} key={i}>
                        <li>
                            {item.title}
                        </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;