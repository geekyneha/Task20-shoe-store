import React from 'react';
import style from './productcard.module.css';
import { products } from '../../utils/product';

const ProductCard = () => {
  return (
    <>
      <div className={style['product-list']}>
        {products.map((card, index) =>{
            const {price,name,productImage}=card;
            return (
          <div className={style.card} key={index}>
            <div className={style['product-image']}>
              <img
                src={productImage}
                alt={name}
                width={250}
                height={250}
              />
            </div>
            <div className={style['product-details']}>
              <div>{name}</div>
              <div>${price}</div>
            </div>
            <div className={style['btn-container']}>
              <button className={style['buy-btn']}>Buy now</button>
              <button className={style['cart-btn']}>Add to cart</button>
            </div>
          </div>
        )})}
      </div>
    </>
  );
};

export default ProductCard;
