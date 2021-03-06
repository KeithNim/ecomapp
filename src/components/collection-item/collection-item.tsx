import React from 'react';

import './collection-item.styles.scss';

interface Props{
    key:number,
    name:string,
    price:number,
    imageUrl:string
}

const CollectionItem = ({ key, name, price, imageUrl }:Props) => (
  <div className='collection-item' key={key}>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;