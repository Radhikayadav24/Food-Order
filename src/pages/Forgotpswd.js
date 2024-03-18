import React, { useState } from 'react';

const Forgotpswd= () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if the username is entered
    if (!username) {
      setError('Please enter your username.');
      return;
    }

    try {
      const response = await fetch("http://polexsoft.com/restaurant/api/forgotPassword.php", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "restaurantId": "1",
          "username": username
        })
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        // Password reset successful
        alert('A mail has been sent to the user with the password. Please check your email.');
        setError('');
      } else {
        // Password reset failed, show error message
        setError(data.message || 'An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='pswd'>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Forgotpswd;
