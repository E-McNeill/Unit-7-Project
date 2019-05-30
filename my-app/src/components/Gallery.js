import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {
  const results = props.data;
  let photos = results.map(pic => 
    <GalleryItem farmId={pic.farm} server={pic.server} key={pic.id} id={pic.id}secret={pic.secret}/>
    );

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

// https://farm{props.farmId}.staticflickr.com/{props.server}/{props.key}_{props.secret}.jpg