import React, { useState } from 'react';
import '../Styles/ProductViewScreen.css';
import ProductImage1 from '../Images/Product 1/1.jpg';
import ProductImage2 from '../Images/Product 1/2.jpg';
import ProductImage3 from '../Images/Product 1/3.jpg';
import ProductImage4 from '../Images/Product 1/4.jpg';

const ProductViewScreen = () => {
  const [selectedImage, setSelectedImage] = useState(ProductImage1);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="product-page">
      {/* Product Image and Thumbnails */}
      <div className="product-image-section">
        <img src={selectedImage} alt="Selected Product" className="main-product-image" />
        <div className="thumbnail-images">
          <img src={ProductImage1} alt="Thumbnail 1" onClick={() => setSelectedImage(ProductImage1)} />
          <img src={ProductImage2} alt="Thumbnail 2" onClick={() => setSelectedImage(ProductImage2)} />
          <img src={ProductImage3} alt="Thumbnail 3" onClick={() => setSelectedImage(ProductImage3)} />
          <img src={ProductImage4} alt="Thumbnail 4" onClick={() => setSelectedImage(ProductImage4)} />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-details-section">
        <h2>Product 1</h2>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>

        <div className="product-pricing">
          <span className="current-price">$125.00</span>
          <span className="discount">50%</span>
          <span className="original-price">$250.00</span>
        </div>

        {/* Add to Cart Section */}
        <div className="add-to-cart-section">
          <div className="quantity-controls">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button className="add-to-cart-button">
            🛒 Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewScreen;
