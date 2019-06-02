import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {

    // state = {
    //     buttonText: ''
    //   }
      
      onButtonClick = e => {
        // this.setState({ buttonText: e.target.innerText });
        this.props.onClick(e.target.innerText);
        console.log(e.target.innerText);
        //console.log(this.e.target.innerText);
        
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

//export default Nav;

