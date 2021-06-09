import React, { useContext } from 'react';
import { ProductContext } from '../context';
import Product from './Product';
import LoadingGif from '../assets/loading.gif'

const Products = () => {
  const { storeProducts, loading } = useContext(ProductContext)
  return (
    <section className='py-3'>
      <div className="container">
        <div className="row justify-content-center justify-content-md-start mx-auto">
          {
            loading ?
              <img src={LoadingGif}
                style={{ width: 200, height: 200, objectFit: 'cover', margin: '0 auto' }}
              /> :
              storeProducts.map(product => (
                <Product key={product.id} product={product} />
              ))
          }
        </div>
      </div >
    </section>

  );
};

export default Products;
