import React from 'react';
import GalleryItem from './GalleryItem';
import NoGalleryItem from './NoGalleryItem';

//all the photos in the array are cycled through and sent to the Gallery Item to display on screen
const Gallery = props => {
  const results = props.data;
  let photos;
  if (results.length >0) {
    photos = results.map(pic => 
      <GalleryItem farmId={pic.farm} server={pic.server} key={pic.id} id={pic.id} secret={pic.secret} />
      );
  } else {
    photos = <NoGalleryItem />;
  }

  return(
   <div className="photo-container">
       <h2>{props.title} Results</h2>
      <ul >
        {photos}
        </ul>
        </div>
 );
};

export default Gallery;

