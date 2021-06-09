import Router from 'next/router';
import React, { useContext } from 'react';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import { ProductContext } from '../../context';

const Product = ({ product }) => {
  const { addToCart, stock } = useContext(ProductContext);

  return (
    <div className="col-9 col-md-6 col-lg-3">
      <div className="card">
        <div className="img-wrap">
          <img className="card-img-top" src={product.image} />
          <div className="product-icons">
            <button className="btn btn-success add"
              onClick={() => addToCart(product.id)}
            ><FaCartPlus />
            </button>
            <button className="btn btn-warning"
              onClick={() => {
                Router.push(`product/${product.id}`)
              }}
            ><FaEye />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className='top'>
            <p className="title text-truncate">{product.title}</p>
            <p className="text-main">${product.price}</p>
          </div>
          <div className='bottom'>
            <p><span>Category:</span> {product.category}</p>
            <p><span className="stock">In stock:</span> {stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
