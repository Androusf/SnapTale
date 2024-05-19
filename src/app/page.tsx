'use client';

import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import Signin from './api/auth/[...nextauth]/SigninC';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SignOutButton from './components/SignOutButton';

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Signin>
        {!session ? (
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white flex-grow px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Welcome to SnapTale!</h1>
            <p className="text-lg text-center mb-6">Create stories, images, and text-to-speech with AI.</p>
            <button
              onClick={() => signIn('github')}
              className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
            >
              Authenticate with GitHub to Continue
            </button>
          </div>
        ) : (
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 flex-grow pb-16 px-4 py-8">
            <MainContent />
            <SignOutButton />
          </div>
        )}
      </Signin>
      <Footer />
    </div>
  );
};

export default Home;
