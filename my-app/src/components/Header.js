import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
//import '../index.css';

function Header() {
    return (
        <Jumbotron className="App-header App">
          <Container >
          <h1 >Erica's Search App</h1>
          <p>This is my simple React Search App</p>
          </Container>
        </Jumbotron>
    );
  }

  
export default Header;