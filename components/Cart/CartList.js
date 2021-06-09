import React, { useContext } from 'react';
import CartItem from './CartItem';
import { ProductContext } from "../../context";

const CartList = () => {
  const { cart, increment, decrement, removeItem } = useContext(ProductContext)
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col">
          {
            cart.length === 0 ?
              <h1 className="text-title text-center my-4">your cart is empty</h1> :
              cart.map(item => (
                <CartItem
                  key={item.id}
                  cartItem={item}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default CartList;
