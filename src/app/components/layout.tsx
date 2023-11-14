import React, { ReactNode } from 'react';
import NavBar from './navigation_bar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <NavBar link1="/" link2="/courses/" link3="/payment/" />
      <div className="absolute -bottom-40 -left-28 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="min-h-screen flex items-center justify-center px-8 relative">
        <div className="absolute">
      
          <div className="absolute -top-20 -left-36 w-96 h-96 rounded-full before bg-orange-300 filter blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-96 w-96 h-96 rounded-full before bg-pink-300 filter blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
