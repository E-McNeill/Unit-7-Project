import React from 'react';

//Component for each specific photo.
const GalleryItem = props => (
<li >
    <img src={`https://farm${props.farmId}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""  />

</li>
);

export default GalleryItem;


