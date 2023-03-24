import React from 'react';
import Panzoom  from 'react-easy-panzoom';

const ImageViewer = ({ image }) => {
    return (
    <div> 
      <Panzoom
        enableBoundingBox 
        minZoom={1}
        maxZoom={2}
      >
        <img
          src={image}
          alt="Product"
          className=" "
          draggable="false"
        />
      </Panzoom>
    </div>
  );
};

export default ImageViewer;
