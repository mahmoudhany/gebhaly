import React, { useContext, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ProductContext } from '../../../context';
import Image from 'next/image'
import LoadingGif from '../../../assets/loading.gif'
import Loading from '../../../components/Loading';


const product = () => {
  const { getProduct, addToCart, loading, singleProduct } = useContext(ProductContext)
  const { id, title, price, description, category, image } = singleProduct
  const { query: { pid } } = useRouter()

  useEffect(() => {
    getProduct(pid)
  }, [pid])

  return (
    <section className="single-product py-5">
      <div className="container">
        <div className="row">
          {
            loading ?
              <Loading />
              :
              <>
                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3 img-wrapper">
                  <img src={image} alt="Product Image" />
                </div>
                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                  <h5 className='text-title mb-4'>Model: {title}</h5>
                  <h5 className='text-capitalize text-muted'>Category: {category}</h5>
                  <h5 className='text-main text-title mt-3'>Price: ${price}</h5>
                  <p className="text-capitalize font-italic mb-0">
                    Description:
                  </p>
                  <p>{description}</p>
                  <button className='btn btn-success'
                    onClick={() => addToCart(id)}
                  >Add to cart</button>

                  <Link href='/'>
                    <a className='btn btn-secondary'
                      style={{ margin: '0.75rem' }}
                    >Back to products</a>
                  </Link>
                </div>
              </>
          }
        </div>
      </div>
    </section>
  );
};

export default product;
