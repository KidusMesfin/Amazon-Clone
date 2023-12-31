import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({ id, title, rating, image, price}) {
const [{ basket }, dispatch] = useStateValue();

// console.log('This is the basket', basket);
  const addtoCart = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
          .fill()
          .map((_,index) => (
            <p key={index}>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  )
}

export default Product
