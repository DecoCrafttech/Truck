// SignInPage.js
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import Link and useHistory from React Router
import { toast, Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './SignInPage.css';

const SignInPage = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOTPRequested, setIsOTPRequested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useHistory(); // Access the history object

  useEffect(() => {
    if (isSignedIn) {
      toast.success(`Welcome to Truck Message, ${userName}!`);
      // Redirect to the home page after successful login
      history.push('/');
    }
  }, [isSignedIn, userName, history]);

  const handleChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send OTP to the provided phone number
    // For this example, let's assume the OTP is sent successfully
    setIsOTPRequested(true);
    toast.success('OTP sent successfully!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your logic to verify OTP here
    // For simplicity, let's assume verification is successful if OTP is entered
    if (otp.trim() !== '') {
      setIsLoading(true); // Set loading state to true while OTP verification is in progress
      // Simulate OTP verification delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('OTP verified successfully!');
      setIsSignedIn(true); // Set signed in state to true upon successful OTP verification
      setIsLoading(false); // Set loading state to false after OTP verification is complete
    } else {
      toast.error('Verification failed. Please enter OTP.');
    }
  };

  // If user is signed in, redirect to home page
  if (isSignedIn) {
    return <div></div>; // Redirect happens via useEffect
  }

  // If user is not signed in, render sign-in form
  return (
    <div className="signin-parent-container">
      <div className="signin-container">
        <Toaster />
        <h2>Sign In</h2>
        <form onSubmit={isOTPRequested ? handleSubmit : handleSendOTP}>
          <div className="form-group">
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handleChange}
              defaultCountry="US" // Set default country code to United States
              required
            />
          </div>
          {!isOTPRequested && (
            <button type="submit">Send OTP</button>
          )}
          {isOTPRequested && (
            <div className="form-group">
              <label htmlFor="otp">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>
          )}
        </form>
        <p>Don't have an account? <a href="#">Sign up here</a></p>
      </div>
    </div>
  );
};

export default SignInPage;
