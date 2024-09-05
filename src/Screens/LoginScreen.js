import React, { useState } from 'react';
import InputField from '../Components/InputField';
import '../Styles/LoginScreen.css'; 
import LoginImage from '../Images/login.png'

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <InputField
            label="Username or email"
            type="text"
            placeholder="Enter your username or email"
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
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button className="login-button">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>

        <div className="illustration-section">
          <img
            src={LoginImage}
            alt="Illustration"
            className="illustration-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
