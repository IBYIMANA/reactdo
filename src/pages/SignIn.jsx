import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Email validation
    
    if (!email || email.trim() === '') {
        errors.email = 'Please enter your email address';
      } else if (email.length < 6) {
        errors.email = 'Please enter a valid email address';
      }
      // Password validation
      if (!password || password.trim() === '') {
        errors.password = 'Please enter your password';
      } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }
  
    if (Object.keys(errors).length === 0) {
      // Proceed with sign-in logic
      console.log('Email:', email);
      console.log('Password:', password);
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      // Update state with errors
      setErrors(errors);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4 py-12 bg-green-500 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6 bg-yellow-200 border-2 border-solid" onSubmit={handleSubmit}>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">SIGN IN</h2>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-2 mt-3 ml-16 border border-gray-300 rounded-md shadow-sm w-72 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="ml-16 text-red-600">{errors.email}</p>}
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block p-2 mt-1 ml-16 border border-gray-300 rounded-md shadow-sm w-72 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && <p className="ml-16 font-bold text-red-600">{errors.password}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center px-4 py-2 ml-16 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm w-72 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
          <p className='ml-16 text-xl'>Already Does not Have An Account?</p>
          <div className='ml-16 gap'>
            <Link to="/forgetpassword" className='text-2xl text-blue-600'>Forgot Password?</Link>
            <Link to="/signup" className='text-2xl text-red-500 ml-'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
