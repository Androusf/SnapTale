import React, { ReactNode } from 'react';

// Define the props interface for the Signin component
interface SigninProps {
  children: ReactNode; // The children prop should be a ReactNode, which can be any valid React element or component
}

// Create a functional component called Signin
const Signin: React.FC<SigninProps> = ({ children }) => {
  // The component returns the children prop as is, without any additional rendering
  return <>{children}</>;
};

// Export the Signin component as the default export
export default Signin
