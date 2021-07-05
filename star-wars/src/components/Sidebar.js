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
                {films.map((item, i) => {
                    console.log(i, item);
                    return(
                        <Link to={'/films/'+i} key={i}>
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