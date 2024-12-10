
import style from './cart.module.css';
import { IoMdRemoveCircle } from 'react-icons/io';

const Cart = ({ cart , onRemoveFromCart}) => {
 
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

 
  return (
    <>
    
      {cart.map((cart, index) => (
        <div className={style.cart} key={index}>
          <div className={style.itemList}>
            <div className={style.items}>
              <div>
                <img
                  src={cart.productImage}
                  alt={cart.name}
                  width={30}
                  height={30}
                />
              </div>
              <div>{cart.name}</div>
              <div>${cart.price}</div>
              
              <div className={style.count}>{cart.quantity}</div>
              <div
                className={style.remove}
                onClick={() => onRemoveFromCart(cart.name)}
              >
                <IoMdRemoveCircle />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button className={style['cart-btn']}>Pay ${totalPrice.toFixed(2)}</button>
      </div>
    </>
  );
};

export default Cart;
