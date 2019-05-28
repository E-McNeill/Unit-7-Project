import React from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';


const SearchForm = () => (
<Form inline className="justify-content-center">
  <FormGroup controlId="formInlineEmail" >
    <FormControl type="search" placeholder="search for an image..." />
  </FormGroup>
  {' '}
  <Button type="submit">
    search
  </Button>
</Form>
);

export default SearchForm;