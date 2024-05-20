import React, { useState } from 'react';
import axios from 'axios';

const GenerateImage: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission to generate an image
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    try {
      // Send a POST request to the '/api/generateImage' endpoint with the keyword
      const response = await axios.post<{ imageUrl: string }>('/api/generateImage', { description: keyword });
      setImageUrl(response.data.imageUrl || ''); // Set the generated image URL
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Failed to generate image:', error);
      setError('Failed to generate image. Please try again.'); // Set the error message
    } finally {
      setLoading(false); // Set loading state back to false
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
          placeholder="An inspirational flower on a windowsill"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${keyword ? '' : 'italic'}`}
        />
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {loading ? 'Generating...' : 'Generate Image'}
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
