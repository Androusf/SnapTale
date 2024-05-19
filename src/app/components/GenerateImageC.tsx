import React, { useState } from 'react';
import axios from 'axios';

const GenerateImage = () => {
  const [keyword, setKeyword] = useState('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/generateImage', { description: keyword });
      setImageUrl(response.data.imageUrl || '');
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Failed to generate image:', error);
      setError('Failed to generate image. Please try again.'); // Set the error message
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6">
        <label htmlFor="keyword" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Generate Image
        </button>
      </form>
      {error && (
        <div className="p-6 bg-red-100 border border-red-400 text-red-700">
          <p>{error}</p>
        </div>
      )}
      {imageUrl && (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Generated Image:</h2>
          <img src={imageUrl} alt="Generated Image" className="w-full" />
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
