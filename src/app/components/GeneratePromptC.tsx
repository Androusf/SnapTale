import React, { useState } from 'react';
import axios from 'axios';

// Create a functional component called GeneratePrompt
const GeneratePrompt: React.FC = () => {
  // Define state variables using the useState hook
  const [keyword, setKeyword] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission to generate a prompt
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    try {
      // Send a POST request to the '/api/generatePrompt' endpoint with the keyword
      const response = await axios.post<{ prompt: string }>('/api/generatePrompt', { topic: keyword });
      setPrompt(response.data.prompt || ''); // Set the generated prompt
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Failed to generate prompt:', error);
      setError('Failed to generate prompt. Please try again.'); // Set the error message
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  // Render the component UI
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="keyword" className="block text-gray-700 text-sm font-bold mb-2">Enter a Topic:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="A haunted house"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${keyword ? '' : 'italic'}`}
        />
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {loading ? 'Generating...' : 'Generate Prompt'}
        </button>
      </form>
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 mb-4">
          <p>{error}</p>
        </div>
      )}
      {prompt && (
        <div className="p-4 bg-gray-100 border border-gray-400">
          <h2 className="text-xl font-bold mb-2">Generated Prompt:</h2>
          <p className="text-gray-700">{prompt}</p>
        </div>
      )}
    </div>
  );
};

// Export the GeneratePrompt component as the default export
export default GeneratePrompt;
