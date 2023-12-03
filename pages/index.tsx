// pages/index.tsx
import React, { useEffect } from 'react';
import Field from '@components/Field';

const Home: React.FC = () => {
  const title = "John Park";

  return (
    <div className="container">
      <Field />
    </div>
  );
}

export default Home;
