import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default class SearchForm extends Component {
  state = {
    searchText: ''
  }
  
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
   this.props.onSearch(this.state.searchText);
    console.log(this.state.searchText);
  }

render() {
  
  return (
<Form inline className="justify-content-center"  onSubmit={this.handleSubmit}>

  <FormGroup controlId="formInlineEmail" >
  <FormControl type="search" placeholder="search for an image..."  onChange={this.onSearchChange}/>
  
  </FormGroup>
  {' '}
  <NavLink to={`/${this.state.searchText}`} >
  <Button type="submit"  >search</Button>
</NavLink>
</Form>
  );
};
};

// export default SearchForm;