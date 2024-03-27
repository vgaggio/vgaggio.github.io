import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, initialDelay }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Velocidad de escritura en milisegundos

      return () => clearInterval(interval);
    }, initialDelay); // Retraso inicial antes de empezar a escribir

    return () => clearTimeout(timeout);
  }, [text, initialDelay]);

  return <span>{displayText}</span>;
};

export default Typewriter;
