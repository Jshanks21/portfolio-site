import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({children, className= ""}: LayoutProps) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;