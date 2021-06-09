import React, { useContext } from 'react';
import { ProductContext } from "../../context";

const CartTotals = () => {
  const { cartSubTotal, cartTax, cartTotal } = useContext(ProductContext)

  return (
    <div className='container'>
      <div className="row">
        <div className="col text-title text-center my-4">
          <h3>Price: ${cartSubTotal}</h3>
          <h3>Tax: ${cartTax}</h3>
          <h3>Total: ${cartTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
