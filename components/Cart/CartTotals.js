import React, { useContext } from 'react';
import { ProductContext } from "../../context";

const CartTotals = () => {
  const { clearCart, cartSubTotal, cartTax, cartTotal } = useContext(ProductContext)

  return (
    <div className='container'>
      <div className="row">
        <div className="col text-title text-center my-4">
          <button
            className='btn btn-outline-danger text-capitalize mb-4'
            onClick={clearCart}
          >clear cart</button>
          <h3>Price: ${cartSubTotal}</h3>
          <h3>Tax: ${cartTax}</h3>
          <h3>Total: ${cartTotal}</h3>
        </div>
      </div>

    </div>
  );
};

export default CartTotals;
