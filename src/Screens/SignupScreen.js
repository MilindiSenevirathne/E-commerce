import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../Components/InputField';
import '../Styles/LoginScreen.css'; 
import SignupImage from '../Images/signup.png'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          
          <InputField
            label="Username"
            type="text"
            placeholder="Enter your username"
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            icon={
              <span onClick={togglePasswordVisibility} className="password-toggle">
                {showPassword ? '🙈' : '👁️'}
              </span>
            }
          />
          <button className="login-button">Sign Up</button>
          <p className="signup-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        <div className="illustration-section">
          <img
            src={SignupImage}
            alt="Illustration"
            className="illustration-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
