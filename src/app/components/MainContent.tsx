import React, { useState } from 'react';
import GeneratePrompt from './GeneratePromptC';
import GenerateImage from './GenerateImageC';
import GenerateSpeech from './TextToSpeechC';
import ToolSelector from './ToolSelector';
import ContentGenerator from './ContentGenerator';

const MainContent: React.FC = () => {
  const [option, setOption] = useState<string>('');

  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 flex-grow pb-16 px-4 py-8">
      <div className="pt-16 text-gray-600 text-center">
        <div className="space-y-5 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold sm:text-6xl text-white">
            Select Your AI Tool
          </h1>
          <p className="max-w-xl mx-auto text-lg text-white">
            Choose between generating prompts, images, or speech using AI.
          </p>
          <ToolSelector setOption={setOption} />
          <ContentGenerator option={option} />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
