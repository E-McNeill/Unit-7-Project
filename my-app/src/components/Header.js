import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Nav from './Nav';


function Header() {
    return (
        <Jumbotron className="App-header">
         <div className="header-text">
          <h1 >Erica's Search App</h1>
          <p>This is my simple React Search App</p>
          </div>
          
        <Nav />
        </Jumbotron>
    );
  }

  
export default Header;