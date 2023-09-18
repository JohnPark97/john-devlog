// pages/LearnMore.tsx
import React from 'react';
import IconLayout from '@components/IconLayout'; // Import the layout component

const LearnMore: React.FC = () => {
  return (
    <IconLayout>
      <div className="container">
        <div className="learn-container">
          <aside className="sidebar">
            <ul>
              <li><a href="/option1">Option 1</a></li>
              <li><a href="/option2">Option 2</a></li>
              <li><a href="/option3">Option 3</a></li>
              <li><a href="/option4">Option 4</a></li>
            </ul>
          </aside>
          <main className="learn-content main">
            <h2>Welcome to the Learn More Page</h2>
            <p>This page contains detailed information about various topics. Choose an option from the sidebar to navigate to that topic.</p>
          </main>
        </div>
      </div>
    </IconLayout>
  );
}

export default LearnMore;
