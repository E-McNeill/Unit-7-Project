import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//Header component holds link at the top to bring user back to homepage, with default 'meerkat' search
export default class Header extends Component {
      
  onButtonClick = e => {
    this.props.onClick('meerkat');
    
  }
render() {
return (
        <Jumbotron className="App-header">
         <div className="header-text">
          <Link to="/home" onClick={this.onButtonClick}><h1>Erica's Search App</h1></Link>
          <p>This is my simple React Search App</p>
          </div>
        </Jumbotron>
    );
  }

}

