import React, { useContext } from 'react'
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'
import { ProductContext } from '../../context'


export default function Navbar() {
  const { cartItems } = useContext(ProductContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
      <div className="container-fluid">
        <Link href='/'>
          <a className="navbar-brand">
            <img src="https://www.gebhaly.com/img/logo.png" alt="Logo" />
          </a>
        </Link>
        <Link href='/cart'>
          <a className="nav-link nav-cart">
            <FaCartPlus className='nav-icon' style={{ width: 22, height: 22 }} />
            <div className="cart-count"
            >{cartItems}</div>
          </a>
        </Link>
      </div>
    </nav>
  )
}
