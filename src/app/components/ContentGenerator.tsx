import React from 'react';
import GeneratePrompt from './GeneratePromptC';
import GenerateImage from './GenerateImageC';
import GenerateSpeech from './TextToSpeechC';

// Define the props interface for the ContentGenerator component
interface ContentGeneratorProps {
  option: string; // The option prop should be a string that represents the selected output type
}

// Create a functional component called ContentGenerator
const ContentGenerator: React.FC<ContentGeneratorProps> = ({ option }) => {
  // The component returns different content based on the value of the option prop
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* If option is 'prompt', render the GeneratePrompt component */}
      {option === 'prompt' && <GeneratePrompt />}
      
      {/* If option is 'image', render the GenerateImage component */}
      {option === 'image' && <GenerateImage />}
      
      {/* If option is 'speech', render the GenerateSpeech component */}
      {option === 'speech' && <GenerateSpeech />}
    </div>
  );
};

// Export the ContentGenerator component as the default export
export default ContentGenerator
