import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';

//Components//
import Gallery from './components/Gallery';
import Header from './components/Header';
import apiKey from './components/config';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import four from './components/four';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      pics: [],
      query:[],
      meerkat: [],
      elephant: [],
      gorilla: [],
      loading: true
    };
  }


//using axios to fetch images
componentDidMount(props) {
  this.performSearch();
  this.performSearch('meerkat');
  this.performSearch('gorilla');
  this.performSearch('elephant');
}



//search function with default query 'meerkat'
performSearch = (query ='meerkat') => {
  
  this.setState({query: query});
axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)

  .then(response => {
    if (query === 'meerkat'){
      this.setState({ meerkat: response.data.photos.photo, loading: false });
     } else if (query === 'elephant'){
        this.setState({ elephant: response.data.photos.photo, loading: false });
       } else if  (query === 'gorilla'){
          this.setState({ gorilla: response.data.photos.photo, loading: false });
       } else {
         this.setState({ pics: response.data.photos.photo, loading: false });
      }
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
  }


  render() {
    return(
     
      <BrowserRouter>
        <div >
          <Header onClick={this.performSearch}/>
          </div>
          <div className="secondPanel">
          <SearchForm onSearch={this.performSearch} />         
          <Nav onClick={this.performSearch} />
          </div>
        
        <div className="container">
        { 
          (this.state.loading)  
          ? <h1>Images Loading...</h1> 
          : 
          <Switch>
          <Route path="/home" render={ () => <Gallery title="Meerkat" data={this.state.meerkat} /> } />
          <Route path="/meerkat" render={ () => <Gallery title="Meerkat"  data={this.state.meerkat} /> } />
          <Route path="/elephant" render={ () => <Gallery title="Elephant"  data={this.state.elephant}  /> } />
          <Route path="/gorilla" render={ () => <Gallery title="Gorilla"  data={this.state.gorilla} /> } />
          <Route exact path="/search/*" render={ () => <Gallery title={this.state.query}  data={this.state.pics} /> } />
          <Route component={four}/>
          </Switch>
        }
     </div>
    
      </BrowserRouter>
    );
  };
}





