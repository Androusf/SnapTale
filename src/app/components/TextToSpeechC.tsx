import React, { useState } from 'react';
import axios from 'axios';

const GenerateSpeech = () => {
  const [text, setText] = useState('');
  const [audioContent, setAudioContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/textToSpeech', { text });
      setAudioContent(response.data.audioContent);
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Failed to generate speech:', error);
      setError('Failed to generate speech. Please try again.'); // Set the error message
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <form onSubmit={handleSubmit} className="p-6">
        <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Text:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Generate Speech
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

export default GenerateSpeech;
