import React, { useState } from 'react';
import axios from 'axios';

const GeneratePrompt = () => {
  const [keyword, setKeyword] = useState('');
  const [prompt, setPrompt] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/generatePrompt', { topic: keyword });
      setPrompt(response.data.prompt || '');
    } catch (error) {
      console.error('Failed to generate prompt:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button type="submit">Generate Prompt</button>
      </form>
      {prompt && (
        <div>
          <h2>Generated Prompt:</h2>
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
};

export default GeneratePrompt;
