import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/meerkat">Meerkat </Link></li>
                <li><Link to="/elephant">Elephant </Link></li>
                <li><Link to="/gorilla">Gorilla</Link></li>
            </ul>
        </nav>
    );
  }

export default Nav;

