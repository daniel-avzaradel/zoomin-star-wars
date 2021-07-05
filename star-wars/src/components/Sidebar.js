import React from 'react';
import '../styles/Sidebar.css'

const Sidebar = ({films}) => {

    console.log(films);

    return(
        <div className="Sidebar">
            <h1>STAR WARS FILMS</h1>
            <br />
            <ul>
                {films.map((item, i) => {
                    return(
                        <li key={i} onClick={() => window.location.pathname = `/${item.episode_id}`} >
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;