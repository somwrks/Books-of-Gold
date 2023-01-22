import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission here
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4">Create an Account</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="email"
            placeholder="example@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            placeholder="********"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            placeholder="********"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
