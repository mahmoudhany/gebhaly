import React, { useContext } from 'react';
import OrderItem from './OrderItem';
import { ProductContext } from "../../context";

const OrderList = () => {
  const { order } = useContext(ProductContext)
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col">
          {
            order.length === 0 ?
              <h5 className="text-title text-center my-4">Loading...</h5> :
              order.map(item => (
                <OrderItem
                  key={item.id}
                  orderItem={item}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default OrderList;
