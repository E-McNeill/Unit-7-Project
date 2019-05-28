import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  return(
   <div className="photo-container">
    <h2>Image Results</h2>
      <ul >
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        </ul>
        </div>
 );
};
export default Gallery;