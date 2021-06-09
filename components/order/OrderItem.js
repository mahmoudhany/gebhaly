import React from 'react';

const OrderItem = ({ orderItem }) => {

  const { title, price, count, total, image } = orderItem

  return (
    <div className='container-fluid'>
      <div className="row mt-5 mt-lg-3 text-capitalize text-center align-items-center">
        {/* image */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <img src={image} width='60' className='img-fluid' alt="product" />
        </div>
        {/* title*/}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">Product: </span>{title}
        </div>
        {/* price */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">Price: </span>${price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center align-items-center">
            <span className='text-title text-muted mx-3'>{count}</span>
          </div>
        </div>
        {/* amount */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <strong className='text-muted'>
            <span className="d-lg-none">item total: </span>
            ${total}</strong>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
