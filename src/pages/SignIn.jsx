// SignIn.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  // State for email and password inputs
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
   setTimeout( 
    navigate('/home'),2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-green-500 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
         
       
        <form className="mt-8 space-y-6 bg-yellow-200 border-2 border-solid" onSubmit={handleSubmit}>
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">SIGN IN</h2>
          <div>
            {/* <label htmlFor="email" className="block mt-3 ml-5 text-sm font-medium text-gray-700">
              Email address
            </label> */}
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block p-2 mt-3 ml-5 border border-gray-300 rounded-md shadow-sm w-72 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            {/* <label htmlFor="password" className="block ml-5 text-sm font-medium text-gray-700 m">
              Password
            </label> */}
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block p-2 mt-1 ml-5 border border-gray-300 rounded-md shadow-sm w- focus:ring-indigo-500 focus:border-indigo-500 w-72"
            />
          </div>
          <div>
            <a href='/home'><button
              type="submit"
              className="flex justify-center px-4 py-2 ml-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm w- hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-72"
            >
              Sign in
            </button></a>
          </div>
          <p className='ml-5 text-2xl'>Already does not have any Account?</p>
        <div className='ml-5 gap'>
        <Link to="/forgetpassword" className='text-2xl text-blue-600'>ForgetPassword?</Link>
            <Link to="/signup" className='ml-5 text-2xl text-red-500'>SignUp</Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;