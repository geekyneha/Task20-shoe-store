import React, { useState } from 'react';
import style from './cart.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";

const Cart = () => {
    const [count,setCount]=useState(0);
    const handleAdd=()=>{
        setCount(()=>count+1);
    }
    const handleRemove=()=>{
        if(count>0){
            setCount(()=>count-1);

        }
    }
  return (
    <>
      <div className={style.cart}>
        <div className={style.itemList}>
          <div className={style.items}>
            <div>
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpbUxdcV1ERsj22kuyUKUQFsLIJeD-ewJoAXz81o6raRviXovZ0_QwjQXZYrHBPWx6A94t7AdZuYxbl3I--kEua7VSlebAc-d2tBcepRhai2y4KU3SedYf0w"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div>name</div>
            <div>price</div>
            <div className={style.add}onClick={handleAdd}><IoIosAddCircle /></div>
            <div className={style.count}>{count}</div>
            <div className={style.remove} onClick={handleRemove}><IoMdRemoveCircle/></div>
          </div>
        </div>
      </div>
      <div><button className={style['cart-btn']}>Pay $ total</button></div>
    </>
  );
};

export default Cart;
