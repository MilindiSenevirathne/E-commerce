import React, { useState } from 'react';
import CardComponent from '../Components/ShoppingItemCard';
import ImageSlider from '../Components/ImageSlider';
import ReactPaginate from 'react-paginate';
import Image1 from '../Images/shirt1.jpg'
import Image2 from '../Images/shirt2.jpg'
import Image3 from '../Images/shirt3.jpg'
import Image4 from '../Images/shirt4.jpg'
import Image5 from '../Images/shirt5.jpg'
import Image6 from '../Images/p6.jpg'
import Image7 from '../Images/p7.jpg'
import Image8 from '../Images/p8.jpg'
import Image9 from '../Images/p9.jpg'
import Image10 from '../Images/p10.jpg'
import Image11 from '../Images/p11.jpg'
import Image12 from '../Images/p12.jpg'

const products = [
    { imageUrl: Image1, title: 'Product 1', originalPrice: '150', discountedPrice: '120' },
    { imageUrl: Image2, title: 'Product 2', originalPrice: '160' },
    { imageUrl: Image3, title: 'Product 3', originalPrice: '170' },
    { imageUrl: Image4, title: 'Product 4', originalPrice: '180' },
    { imageUrl: Image5, title: 'Product 5', originalPrice: '190', discountedPrice: '160' },
    { imageUrl: Image6, title: 'Product 6', originalPrice: '200', discountedPrice: '170' },
    { imageUrl: Image7, title: 'Product 7', originalPrice: '210' },
    { imageUrl: Image8, title: 'Product 8', originalPrice: '220' },
    { imageUrl: Image9, title: 'Product 9', originalPrice: '230', discountedPrice: '200' },
    { imageUrl: Image10, title: 'Product 10', originalPrice: '240' },
    { imageUrl: Image11, title: 'Product 11', originalPrice: '250', discountedPrice: '220' },
    { imageUrl: Image12, title: 'Product 11', originalPrice: '200', discountedPrice: '190' }
];

const HomeScreen = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3 * 6; // 4 items per row, 5 rows in total

    // Get current items for the active page
    const currentItems = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Handle page click
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div>
            <ImageSlider /> {/* Optional */}
            <div style={gridStyle}>
                {currentItems.map((product, index) => (
                    <CardComponent
                        key={index}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        originalPrice={product.originalPrice}
                        discountedPrice={product.discountedPrice}
                    />
                ))}
            </div>

        </div>
    );
};

// Inline styles for the grid layout
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
    width: '100%', 
    maxWidth: '900px', 
    margin: '50px auto', 
  };

export default HomeScreen;
