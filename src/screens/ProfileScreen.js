import React, { useState, useEffect } from "react";
import { useUser } from "./useUser";

const ProfileScreen = () => {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({ name, email, address, phone });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-medium mb-4">Your Profile</h2>
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button className="bg-indigo-500 text-white rounded-lg p-2">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileScreen;
