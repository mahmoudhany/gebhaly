import React, { useContext } from 'react';
import Router from 'next/router'
import Title from '../Title';
import OrderList from './OrderList';
import OrderTotals from './OrderTotals';
import OrderColumns from './OrderColumns';
import { ProductContext } from '../../context';

const Order = () => {
  const { clearCart, clearOrder } = useContext(ProductContext)
  const submitOrder = () => {
    alert('Order on the way')
    clearCart()
    clearOrder()
    Router.push('/')
  }
  return (
    <section className='py-5'>
      <div className="container">
        <Title title='Your order' />
      </div>
      <OrderColumns />
      <OrderList />
      <OrderTotals />
      <div className="col text-center">
        <button
          className='btn btn-success'
          onClick={submitOrder}>Pay now</button>
      </div>
    </section >
  );
};

export default Order;
