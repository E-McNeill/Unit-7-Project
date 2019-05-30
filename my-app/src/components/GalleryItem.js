import React from 'react';

const GalleryItem = props => (
<li >
    {/* <img src={'https://picsum.photos/200'} alt=""  /> */}
    <img src={`https://farm${props.farmId}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""  />

</li>
);

export default GalleryItem;


// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

// https://farm66.staticflickr.com/65535/47955749468_15a6f64578.jpg