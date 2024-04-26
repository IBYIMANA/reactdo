import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!password || password.length < 6) {
      errors.password = 'Password must be at least 8 characters long';
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // Proceed with sign-up logic
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    } else {
      // Update state with errors
      setErrors(errors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-green-500 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6 bg-yellow-200 border-2 border-solid" onSubmit={handleSubmit}>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Create your account</h2>
          <div>
            <label htmlFor="email" className="block ml-5 text-2xl font-bold text-black">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-2 mt-1 ml-5 border border-gray-300 rounded-md shadow-sm w-72 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block ml-5 text-2xl font-bold text-black">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block p-2 mt-1 ml-5 border border-gray-300 rounded-md shadow-sm w-72 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block ml-5 text-2xl font-bold text-black">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block p-2 mt-1 ml-5 border border-gray-300 rounded-md shadow-sm w-72 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center px-4 py-2 ml-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm w-72 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
          <p className='ml-5 text-2xl font-bold'>Already have an account?</p>
          <Link to={"/"} className='ml-8 text-2xl font-bold text-blue-600'>Sign In</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
