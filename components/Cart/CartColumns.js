import React from 'react';

const CartColumns = () => {
  const columns = ['products',
    'product title',
    'price', 'quantity',
    'remove',
    'total']
  return (
    <div className='container-fluid text-center d-none d-lg-block my-5'>
      <div className="row">
        {
          columns.map(col => (
            <div className="col-lg-2" key={col}>
              <p className='text-uppercase'>{col}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CartColumns;
