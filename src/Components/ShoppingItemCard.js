import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Styles/ShoppingItemCard.css'; 

const ShoppingItemCard = ({ imageUrl, title, originalPrice, discountedPrice, productId }) => {
  const navigate = useNavigate();


  const handleCardClick = () => {
    navigate('./product');
    // navigate(`/product/${productId}`);
  };

  return (
    <div className="shopping-item-card" onClick={handleCardClick}>
      <img src={imageUrl} alt={title} className="product-image" />
      <div>
        <h5 className="product-title">{title}</h5>
        <div className="price-container">
          <span className={`original-price ${discountedPrice ? 'has-discount' : ''}`}>
            ${originalPrice}
          </span>
          {discountedPrice && (
            <span className="discounted-price">${discountedPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingItemCard;
