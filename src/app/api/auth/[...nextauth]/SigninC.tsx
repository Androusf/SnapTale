import React, { ReactNode } from 'react';

interface SigninProps {
  children: ReactNode;
}

const Signin: React.FC<SigninProps> = ({ children }) => {
  return <>{children}</>;
};

export default Signin;