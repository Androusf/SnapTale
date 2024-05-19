'use client';
import React, { useState } from 'react';
import GeneratePrompt from './components/GeneratePromptC';
import GenerateImage from './components/GenerateImageC';
import GenerateSpeech from './components/TextToSpeechC';
import { useSession, signIn, signOut } from 'next-auth/react';
import Signin from './api/auth/[...nextauth]/SigninC';

const Home = () => {
  const { data: session } = useSession();
  const [option, setOption] = useState('');

  return (
    <Signin>
      {!session ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">Please Sign In</h1>
          <button
            onClick={() => signIn('github')}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Sign In with GitHub
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="mb-4">
            <button
              onClick={() => setOption('prompt')}
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            >
              Generate Prompt
            </button>
            <button
              onClick={() => setOption('image')}
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            >
              Generate Image
            </button>
            <button
              onClick={() => setOption('speech')}
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            >
              Generate Speech
            </button>
            <button
              onClick={() => alert('this function is not allowed')}
              className="px-4 py-2 bg-red-500 text-white rounded mr-2"
            >
              Text Analysis
            </button>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Sign Out
            </button>
          </div>
          <div className="w-full max-w-2xl">
            {option === 'prompt' && <GeneratePrompt />}
            {option === 'image' && <GenerateImage />}
            {option === 'speech' && <GenerateSpeech />}
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Developed by <a href="https://www.linkedin.com/in/andresfeliperocha/" target="_blank" rel="noopener noreferrer" className="underline">Andres Rocha</a>
          </div>
        </div>
      )}
    </Signin>
  );
};

export default Home;
