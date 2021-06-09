import React, { useContext } from 'react';
import Link from 'next/link'
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductContext } from '../../context';

const Cart = () => {
  const { setOrder, cart } = useContext(ProductContext)
  return (
    <section className='py-5'>
      <div className="container">
        <Title title={`${cart.length === 0 ? 'Cart is empty' : 'Your cart items'}`} />
      </div>
      {
        cart.length !== 0 &&
        <>
          <CartColumns />
          <CartList />
          <CartTotals />
          <div className="col text-center">
            <Link href='/order'>
              <a className='btn btn-success' onClick={setOrder}>Proceed to checkout</a>
            </Link>
          </div>
        </>
      }
    </section >
  );
};

export default Cart;
