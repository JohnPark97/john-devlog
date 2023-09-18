// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import MyGifComponent from '@components/gifs/becca_dancing';

const Home: React.FC = () => {
  const title = "John Park";

  return (
    <div className="container">
      <Head>
        <title>Your Professional Site</title>
      </Head>

      <header className="header">
        <h1 className="title">
          {title.split("").map((char, index) => 
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>
          )}
        </h1>
      </header>

      <main className="main">
        <MyGifComponent />
        <p className="description">
          A software developer specializing in modern web and mobile applications.
        </p>
        <button className="button">Learn More</button>
      </main>
    </div>
  );
}

export default Home;
