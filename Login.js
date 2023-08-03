// login page in react


import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email and password are filled before form submission
    if (!formData.email.trim() || !formData.password.trim()) {
      setFormSubmitted(true); // Update form submission status
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      console.log(data);
      setLoginSuccess(true);
    } catch (error) {
      console.error(error);
      alert('Failed to login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="./logo.png" alt="ANA" />
      </div>

      <h2>Login Here!</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username/Email address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formSubmitted && !formData.email.trim() && (
          <p className="error-message">!Please enter your email.</p>
        )}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {formSubmitted && !formData.password.trim() && (
          <p className="error-message">!Please enter your password.</p>
        )}
        <div className="forgot-password">
          <a href="/">Forgot Password?</a>
        </div>
        <button
          type="submit"
          onClick={() => {
            if (!formData.email.trim() || !formData.password.trim()) {
              setFormSubmitted(true);
            }
          }}
        >
          Login
        </button>
      </form>

      {loginSuccess && <p>Login successful!</p>}
    </div>
  );
};

export default Login;
