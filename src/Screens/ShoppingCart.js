import React from 'react';
import '../Styles/ShoppingCart.css';
import Image1 from '../Images/Product 1/1.jpg'
import Image2 from '../Images/Product 1/2.jpg'

const ShoppingCart = () => {
  return (
    <div className="cart-container">
      
      <div className="cart-table">
        {/* Table Headers */}
        <div className="cart-header">
          <span>Description</span>
          <span>Size</span>
          <span>Quantity</span>
          <span>Remove</span>
          <span>Price</span>
        </div>
        
        {/* Cart Items */}
        <div className="cart-item">
          <div className="cart-description">
            <img src={Image2} alt="Product 1" />
            <div>
              <p className="product-title">Streamline Leggings</p>
              <p className="product-code">Product Code: MLSB</p>
            </div>
          </div>
          <span>S</span>
          <span>1</span> {/* Static quantity */}
          <span className="remove-item">x</span>
          <span>£55</span>
        </div>

        <div className="cart-item">
          <div className="cart-description">
            <img src={Image1} alt="Product 2" />
            <div>
              <p className="product-title">Streamline Sports Bra</p>
              <p className="product-code">Product Code: MLSP</p>
            </div>
          </div>
          <span>S</span>
          <span>1</span> {/* Static quantity */}
          <span className="remove-item">x</span>
          <span>£55</span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="cart-summary">
        <div className="summary-row">
          <span>Discount</span>
          <span>£0.00</span>
        </div>
        <div className="summary-row">
          <span>Delivery</span>
          <span>£0.00</span>
        </div>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>£110.00</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>£110.00</span>
        </div>

        <div className="cart-buttons">
          <button className="checkout-button">Checkout</button>
          <button className="continue-shopping-button">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
