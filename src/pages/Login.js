import React, { useState ,useEffect } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [permissions, setPermissions] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSuccess = () => {
   {/*} alert('Login successful!');*/}
    
    window.location.href = '/Table';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = { username: '', password: '' };


    if (!formData.username) {
      newErrors.username = 'Please enter your username.';
    }

    if (!formData.password) {
      newErrors.password = 'Please enter your password.';
    } else if (formData.password.length < 4) {
      newErrors.password = 'Invalid password. Please enter at least 4 characters.';
    }

    setErrors(newErrors);

  
    if (newErrors.username || newErrors.password) {
      alert('Please fix the form errors before submitting.');
      return;
    }

    
    try {
      const response = await fetch("http://polexsoft.com/restaurant/api/login.php", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "restaurantId": 1,
          "username": formData.username,
          "password": formData.password
        })
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
     
       const permissionsResponse = await fetch("http://polexsoft.com/restaurant/api/userPermission.php", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "restaurantId": 1,
          "roleId": "1"
        })
      });

      const permissionsData = await permissionsResponse.json();

      if (permissionsResponse.ok && permissionsData.status === 'success') {
        // Permissions retrieved successfully
        setPermissions(permissionsData.permissions);
        console.log('User permissions:', permissionsData.permissions);
        handleLoginSuccess();
      } else {
        // Permissions request failed error message
        console.error('Error fetching permissions:', permissionsData.message);
        alert('An error occurred while fetching permissions.');
      }
    } else {
      // Login failed error message
      alert('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred during login. Please try again later.');
  }
};

useEffect(() => {
  // we can use the 'permissions' state as needed in your component or pass it to other components.
  console.log('Current permissions:', permissions);
}, [permissions]);

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="forgot-password">
          <a href="/Forgotpswd">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;



/*
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = { phone: '', password: '' };

    if (!formData.phone) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (formData.phone.length !== 11) {
      newErrors.phone = 'Invalid phone number. Must be 11 digits.';
    }

    
    if (!formData.password) {
      newErrors.password = 'Please enter your password.';
    } else if (formData.password.length < 4) {
      newErrors.password = 'Invalid password. Please enter at least 4 characters.';
    }

    setErrors(newErrors);

    
    if (newErrors.phone || newErrors.password) {
      alert('Please fix the form errors before submitting.');
      return;
    }

    
    try {
      const response = await fetch("http://polexsoft.com/restaurant/api/login.php", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "restaurantId": 1,
          "username": formData.phone,  
          "password": formData.password
        })
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
     
        console.log('Login successful!');
      } else {
       
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
*/

/*
import React, { useState, useEffect } from 'react';

const Login= () => {


  const [er1,seter1]=useState(false);

async function fetchinfo()
{

await fetch("http://polexsoft.com/restaurant/api/login.php",{
  method:"POST",
  headers:{
    'Content-Type':'application/json',
    'Accept':'application/json'
  },
  body:JSON.stringify({"restaurantId":1,"username":"testuser","password":"12345"})
})
.then(response=>response.json())
.then(data =>{
  console.log('data',data)
if(data.status=='success')
{
  seter1(false)
}
else{
  seter1(true)
}
})
.catch(error=>console.error('error',error))
}



    const [formData, setFormData] = useState({
        "phone": "12345678902",
        "password": "1234"
      });
    
      const [errors, setErrors] = useState({
        phone: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
    
     
        let newErrors = { phone: '', password: '' };
    
        if (formData.phone.length !== 11) {
          newErrors.phone = 'Invalid phone number.';
        }
    
        if (formData.password.length < 4) {
          newErrors.password = 'Invalid password. Please enter a password with at least 4 characters';
        }
    
        setErrors(newErrors);
 
        if (!newErrors.phone && !newErrors.password) {
          console.log('Phone:', formData.phone);
          console.log('Password:', formData.password);

        
        }
      };
    console.log("values are", formData)
  return (
    <div>
      {
        er1 &&
        <div>phone num and psswd wrong </div>
      }
    <div className="logincontainer">
    <h2>Login</h2>
    <div className="loginform" onSubmit={handleSubmit}>
      <div className="ffg">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
      <div className="ffg">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="ffg">
  
        <button type="submit" onClick={()=>{fetchinfo()}}>Login</button>
    
      </div>
    </div>
  </div>
  </div>
  );
};

export default Login;
*/