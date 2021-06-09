import React, { Component, createContext } from 'react';
import axios from 'axios'

const ProductContext = createContext();
class ProductProvider extends Component {
  state = {
    storeProducts: [],
    cart: [],
    order: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    price: 0,
    singleProduct: {},
    loading: false,
  }

  async componentDidMount() {
    try {
      const products = await axios.get('https://fakestoreapi.com/products?limit=15')
      this.setProducts(products.data)
    } catch (error) {
      console.log(error.message);
    }
  }

  setOrder = () => {
    let order = [...this.state.cart]
    localStorage.setItem('order', JSON.stringify(order))
    this.setState({ order: order })
  }

  setProducts = async (products) => {
    const cart = await this.getCart()
    this.setState({
      storeProducts: products,
      cart,
      loading: false,
      order: this.getStorageOrder(),
    }, () => {
      this.addTotals()
    })
  }

  //////////// local storage /////////////
  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
    localStorage.setItem('order', JSON.stringify(this.state.order))
  }
  getProduct = async (id) => {
    try {
      const product = await axios.get(`https://fakestoreapi.com/products/${id}`)
      this.setState({
        singleProduct: product.data,
        loading: false
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  // get cart from local storage
  getCart = async () => {
    let cart;
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      cart = []
    }
    return cart
  }

  // get order from local storage
  getStorageOrder = () => {
    let order;
    if (localStorage.getItem('order')) {
      order = JSON.parse(localStorage.getItem('order'))
    } else {
      order = []
    }
    return order
  }
  // // get Totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total
      cartItems += item.count
    })
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = parseFloat((subTotal * 0.2).toFixed(2))

    let total = parseFloat((subTotal + tax).toFixed(2))

    return {
      cartItems,
      subTotal,
      tax,
      total
    }
  }

  // add Totals
  addTotals = () => {
    const { cartItems, subTotal, tax, total } = this.getTotals()
    this.setState({
      cartItems: cartItems,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    })

  }
  // add to cart
  addToCart = (productId) => {
    let tempCart = [...this.state.cart]
    let tempProducts = [...this.state.storeProducts]
    let tempItem = tempCart.find(item => item.id === productId)

    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === productId)
      let total = tempItem.price
      let cartItem = { ...tempItem, count: 1, total }
      tempCart = [...tempCart, cartItem]
    } else {
      tempItem.count++;
      tempItem.total = parseFloat((tempItem.price * tempItem.count).toFixed(2))
    }

    this.setState(() => {
      return { cart: tempCart }
    }, () => {
      this.addTotals()
      this.syncStorage()
    })
  }

  // increment
  increment = (id) => {
    let tempCart = [...this.state.cart]
    const cartItem = tempCart.find(item => item.id === id)
    cartItem.count++;
    cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2))
    this.setState(() => (
      { cart: [...tempCart] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }

  // decrement
  decrement = (id) => {
    let tempCart = [...this.state.cart]
    const cartItem = tempCart.find(item => item.id === id)
    cartItem.count--;
    if (cartItem.count === 0) {
      this.removeItem(id)
    } else {
      cartItem.total = parseFloat((cartItem.count * cartItem.price).toFixed(2))
      this.setState(() => (
        { cart: [...tempCart] }
      ), () => {
        this.addTotals()
        this.syncStorage()
      })
    }
  }

  // remove item
  removeItem = (id) => {
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter(item => item.id !== id)

    this.setState(() => (
      { cart: [...tempCart] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }

  // clear cart
  clearCart = () => {
    this.setState(() => (
      { cart: [] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }

  // clear order array
  clearOrder = () => {
    this.setState(() => (
      { order: [] }
    ), () => {
      this.addTotals()
      this.syncStorage()
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        addToCart: this.addToCart,
        getProduct: this.getProduct,
        setOrder: this.setOrder,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        clearOrder: this.clearOrder,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


export { ProductProvider, ProductContext };
