// SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  // State for email, password, and confirm password inputs
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    setTimeout(() => {
         navigate('/signin')
    }, 3000);
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-green-300 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        
        <form className="mt-8 space-y-6 bg-pink-500 rounded-lg shadow-lg" onSubmit={handleSubmit}>
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
          </div>
          <div>
             <button
              type="submit"
              className="flex justify-center px-4 py-2 ml-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm w-72 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
          <p className='ml-5 text-2xl font-bold'>I have already a account </p>
          <Link to={"/"} className='ml-8 text-2xl font-bold text-blue-600'>SignIn</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;