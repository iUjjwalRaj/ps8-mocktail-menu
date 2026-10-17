import { Link } from "react-router-dom";
import React from 'react';

function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/drinks">Drinks</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;