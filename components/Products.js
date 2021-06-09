import React, { useContext } from 'react';
import { ProductContext } from '../context';
import Loading from './Loading';
import Product from './Product';

const Products = () => {
  const { storeProducts, loading } = useContext(ProductContext)
  return (
    <section className='py-3'>
      <div className="container">
        <div className="row justify-content-center justify-content-md-start mx-auto">
          {
            loading ?
              <Loading />
              :
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
