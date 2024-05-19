import React from 'react';
import { signOut } from 'next-auth/react';

const SignOutButton: React.FC = () => {
  return (
    <button
      onClick={() => signOut()}
      className="absolute bottom-0 right-0 m-4 mb-8 px-4 py-2 bg-red-500 text-white rounded-lg focus:outline-none focus:shadow-outline hover:bg-red-700 transition duration-300 ease-in-out"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
