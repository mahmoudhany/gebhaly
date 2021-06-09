import React, { useContext } from 'react';
// import { FilterProducts, Product, Title } from '../';
import { ProductContext } from '../context';
import Product from './Product';

const Products = () => {
  const { storeProducts } = useContext(ProductContext)
  return (
    <section className='py-3'>
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          {
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
