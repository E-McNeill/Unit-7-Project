import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import './index.css';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import Header from './components/Header';

function App() {
  return (
    <div >
        {/* <Container > */}
        <Header />
        < SearchForm />
        {/* </Container> */}
      <div className="container">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
