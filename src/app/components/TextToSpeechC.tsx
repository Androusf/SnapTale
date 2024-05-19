import React, { useState } from 'react';
import axios from 'axios';

// Create a functional component called GenerateSpeech
const GenerateSpeech: React.FC = () => {
  // Define state variables using the useState hook
  const [text, setText] = useState<string>('');
  const [audioContent, setAudioContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission to generate speech
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    try {
      // Send a POST request to the '/api/textToSpeech' endpoint with the text
      const response = await axios.post<{ audioContent: string }>('/api/textToSpeech', { text });
      setAudioContent(response.data.audioContent); // Set the generated audio content
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Failed to generate speech:', error);
      setError('Failed to generate speech. Please try again.'); // Set the error message
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  // Render the component UI
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6">
        <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Text:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Interstellar is the best movie I have ever seen."
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${text ? '' : 'italic'}`}
        />
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {loading ? 'Generating...' : 'Generate Speech'}
        </button>
      </form>
      {error && (
        <div className="p-6 bg-red-100 border border-red-400 text-red-700">
          <p>{error}</p>
        </div>
      )}
      {audioContent && (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Generated Speech:</h2>
          <audio controls src={`data:audio/mp3;base64,${audioContent}`} className="outline-none" />
        </div>
      )}
    </div>
  );
};

// Export the GenerateSpeech component as the default export
export default GenerateSpeech;
