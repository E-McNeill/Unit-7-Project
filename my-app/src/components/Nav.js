import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Navigation section has 3 image options to choose from
export default class Nav extends Component {
      
      onButtonClick = e => {
        this.props.onClick(e.target.innerText);
        
      }
render() {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/meerkat" onClick={this.onButtonClick}>Meerkat </Link></li>
                <li><Link to="/elephant" onClick={this.onButtonClick}>Elephant </Link></li>
                <li><Link to="/gorilla" onClick={this.onButtonClick}>Gorilla </Link></li>
            </ul>
        </nav>
    );
}
  }


