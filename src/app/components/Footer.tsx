import React from 'react';

// Create a functional component called Footer
const Footer: React.FC = () => {
  return (
    <footer className="mt-auto text-sm text-gray-500 text-center py-4 bg-gray-100">
      {/* Footer content with developer information */}
      Developed by <a href="https://www.linkedin.com/in/andresfeliperocha/" target="_blank" rel="noopener noreferrer" className="underline">Andres Rocha</a>
    </footer>
  );
};

// Export the Footer component as the default export
export default Footer;
