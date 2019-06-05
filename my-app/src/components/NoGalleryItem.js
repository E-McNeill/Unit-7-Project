import React from 'react';

//Renders if there are no photos that match the search term
function NoGalleryItem() {
    return (
            <li className="not-found">
                <h1>No result found</h1>
                <h3>There are no results for your search term, please try again.</h3>
            </li>
    );
  }

export default NoGalleryItem;


