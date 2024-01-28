// App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import InvitationCard from './InvitationCard';

const music = 'https://revcsv.s3.amazonaws.com/Kudmayi.mp3';

function App() {
  const audioRef = useRef(null);

  const handleUserInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleUserInteraction);
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div className="app">
      <video autoPlay loop muted id="background-video">
        <source src="https://revcsv.s3.amazonaws.com/0127.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio ref={audioRef} src={music} />
      <InvitationCard />
    </div>
  );
}

export default App;
