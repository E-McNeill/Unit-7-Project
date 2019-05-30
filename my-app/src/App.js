import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
//import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import axios from 'axios';
//Components//
import Gallery from './components/Gallery';
import Header from './components/Header';
//import apiKey from './components/config';
import SearchForm from './components/SearchForm';

//const api = apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: []
    };
  }


//using axios to fetch images
componentDidMount(props) {
axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7f2da04cf3afbf85e0fb619f94a6cb01&tags=sunsets&per_page=24&format=json&nojsoncallback=1')
// axios.get(`https://farm${this.farmId}.staticflickr.com/${this.server}/${this.key}_${this.secret}.jpg`)
.then(response => {
    this.setState({
      pics: response.data.photos.photo
    });
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
}


  render() {
  console.log(this.state.pics);
    return(
      <BrowserRouter>
        <div >
          <Header />
          < SearchForm />
        </div>
        <div className="container">
          <Gallery data={this.state.pics}/>
        </div>
      
      </BrowserRouter>
    );
  }
}
