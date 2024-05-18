import React, { useState } from 'react';
import axios from 'axios';

const GenerateImage = () => {
  const [keyword, setKeyword] = useState('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/generateImage', { description: keyword });
      setImageUrl(response.data.imageUrl || '');
    } catch (error) {
      console.error('Failed to generate image:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">Description:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button type="submit">Generate Image</button>
      </form>
      {imageUrl && (
        <div>
          <h2>Generated Image:</h2>
          <img src={imageUrl} alt="Generated Image" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
