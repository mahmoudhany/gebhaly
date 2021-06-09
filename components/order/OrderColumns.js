import React from 'react';

const OrderColumns = () => {
  const columns = ['products', 'product title', 'price', 'quantity', 'total']
  return (
    <div className='container-fluid text-center d-none d-lg-block my-5'>
      <div className="row">
        {
          columns.map(col => (
            <div className="col-lg-2 mx-auto" key={col}>
              <p className='text-uppercase'>{col}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OrderColumns;
