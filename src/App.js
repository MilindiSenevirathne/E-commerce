import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './Components/NavBar';
import { Container } from 'react-bootstrap'; 

// Home Screen
import HomeScreen from './Screens/HomeScreen';

// Login Screen
import LoginScreen from './Screens/LoginScreen';

// Signup page
import SignupScreen from './Screens/SignupScreen';

// View Product Page
import ProductViewScreen from './Screens/ProductViewScreen';

// Shopping Cart Page
import ShoppingCart from './Screens/ShoppingCart';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main className="py-3">
        <Container>
          <Routes>
          <Route path="/login" element={<LoginScreen />}  />
          <Route path="/signup" element={<SignupScreen />} />

            <Route path="/" element={<HomeScreen />} /> 
            <Route path="/product" element={<ProductViewScreen />} /> 
            <Route path="/cart" element={<ShoppingCart />} /> 
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
