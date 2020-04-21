import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  console.log(props.images);
  
  // const images = props.images.map((image) => {
  //   return <img key={image.id} src={image.urls.regular} alt={image.description} />
  // });
 // old way above, refactor below
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList; 