import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';


export default class SearchForm extends Component {

render() {
  return (
<Form inline className="justify-content-center" onSubmit={this.handleSubmit}>
  <FormGroup controlId="formInlineEmail" >
    <FormControl type="search" placeholder="search for an image..." />
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