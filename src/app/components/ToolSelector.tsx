import React from 'react';

interface ToolSelectorProps {
  setOption: React.Dispatch<React.SetStateAction<string>>;
}

const ToolSelector: React.FC<ToolSelectorProps> = ({ setOption }) => {
  return (
    <div className="mb-4 w-full max-w-md mx-auto" style={{ backgroundColor: '#f3f4f6', padding: '50px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
      <label htmlFor="component-select" className="block text-gray-700 text-sm font-bold mb-2">
        Select output:
      </label>
      <div className="relative">
        <select
          id="component-select"
          onChange={(e) => setOption(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          style={{ backgroundColor: '#fff', borderColor: '#ccc', color: '#555' }}
        >
          <option value="">Select an option</option>
          <option value="prompt">Generate a story</option>
          <option value="image">Generate an image</option>
          <option value="speech">Generate a speech</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M7 10l5 5 5-5H7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ToolSelector;
