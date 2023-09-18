// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <div className="icon-container">
        <a href="https://github.com/johnpark97" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/john-park-11689b16b" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
        </a>
        </div>
      {children}
    </div>
  );
}

export default Layout;
