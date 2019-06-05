import React from 'react';
import GalleryItem from './GalleryItem';
import NoGalleryItem from './NoGalleryItem';

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

