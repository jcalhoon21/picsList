import React from 'react';
import './ImageList.css';
import ImageCard from '../ImageCard';

const ImageList = (props) => {
  console.log(props.images);
  
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });
 // refactor below
  // const images = props.images.map(({ description, id, urls }) => {
  //   return <img key={id} src={urls.regular} alt={description} />
  // });

  return <div className="image-list">{images}</div>;
};

export default ImageList; 