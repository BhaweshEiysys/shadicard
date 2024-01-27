import React, { useEffect, useRef } from 'react';
import './App.css';
import InvitationCard from './InvitationCard';
import video from './new.mp4';
import music from './Kudmayi.mp3'; // Replace with the path to your music file

function App() {
  const audioRef = useRef(null);

  const handleUserInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    // Attach the user interaction event listener
    document.addEventListener('click', handleUserInteraction);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="app">
      <video autoPlay loop muted id="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio ref={audioRef} src={music} />
      <InvitationCard />
    </div>
  );
}

export default App;
