'use client';
import React, { useState } from 'react';
import GeneratePrompt from './components/GeneratePromptC';
import GenerateImage from './components/GenerateImageC';

const Home = () => {
  const [option, setOption] = useState('');

  return (
    <div>
      <div>
        <button onClick={() => setOption('prompt')}>Generate Prompt</button>
        <button onClick={() => setOption('image')}>Generate Image</button>
        <button onClick={() => alert('this function is not allowed')}>Text Analysis</button>
      </div>
      {option === 'prompt' && <GeneratePrompt />}
      {option === 'image' && <GenerateImage />}
    </div>
  );
};

export default Home;
