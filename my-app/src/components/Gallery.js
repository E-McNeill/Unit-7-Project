import React from 'react';
import GalleryItem from './GalleryItem';
import NoGalleryItem from './NoGalleryItem';
import {Route} from 'react-router-dom';

const Gallery = props => {
  const results = props.data;
  let photos;
  if (results.length >0) {
    photos = results.map(pic => 
      <GalleryItem farmId={pic.farm} server={pic.server} key={pic.id} id={pic.id}secret={pic.secret}/>
      );
  } else {
    photos = <Route path="/error" component={NoGalleryItem} />
  }
  

  return(
   <div className="photo-container">
    <h2>Image Results</h2>
      <ul >
        {photos}
        </ul>
        </div>
 );
};
export default Gallery;

