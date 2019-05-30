import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';


export default class SearchForm extends Component {
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }

render() {
  return (
<Form inline className="justify-content-center" onSubmit={this.handleSubmit}>
  <FormGroup controlId="formInlineEmail" >
    <FormControl type="search" placeholder="search for an image..." onChange={this.onSearchChange}/>
  </FormGroup>
  {' '}
  <Button type="submit">
    search
  </Button>
</Form>
  )
}
};

//export default SearchForm;