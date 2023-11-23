import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Great... this is time to learn about hooks');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('Great... this is time to learn about hooks');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []); 
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
