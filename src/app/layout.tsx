'use client';
import { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import './styles/globals.css';

// Define the props interface for the RootLayout component
interface RootLayoutProps {
  children: ReactNode; // The children prop should be a ReactNode, which can be any valid React element or component
}

// Create a functional component called RootLayout
export default function RootLayout({ children }: RootLayoutProps) {
  // The component returns the children wrapped in a SessionProvider and HTML structure
  return (
    <html>
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
