import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <Jumbotron className="App-header">
         <div className="header-text">
          <Link to="/home" ><h1>Erica's Search App</h1></Link>
          <p>This is my simple React Search App</p>
          </div>
        </Jumbotron>
    );
  }

  
export default Header;

