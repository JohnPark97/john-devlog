// pages/LearnMore.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LearnMore: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Learn More - John Park</title>
      </Head>
      
      <div className="learn-container">
        
        {/* Sidebar */}
        <div className="learn-sidebar">
          <ul>
            <li>
              <Link href="/devlog/python-exploration">
                <a>Python Exploration</a>
              </Link>
            </li>
            <li>
              <Link href="/devlog/nitty-learnings">
                <a>Nitty Learnings</a>
              </Link>
            </li>
            <li>
              <Link href="/devlog/pixel-arts">
                <a>Pixel Arts</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="learn-content">
          <h2>Welcome to the DevLog</h2>
          <p>
            Here you'll find a collection of my explorations, learnings, and creative endeavors in the world of software development. Dive into each section to discover more.
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default LearnMore;
