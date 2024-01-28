import React from 'react';
import './InvitationCard.css';
import video from './new-blue.mp4';
import ganeshaImage from './ganesh-37.png';

const Ganesha = () => (
  <div className="ganesha-container">
    <img src={ganeshaImage} alt="Lord Ganesha" className="ganesha-image" />
  </div>
);

const MangalikKaryakram = () => (
  <div className="mangalik-karyakram">
    <p className="mangalik-text">मांगलिक कार्यक्रम</p>
    <p className="mangalik-text">शुभांशी सिंह, (सॉफ्टवेयर इंजीनियर) परिणय कुलदीप सिंह,( सॉफ्टवेयर इंजीनियर)</p>
    <p className="mangalik-text">शुभ विवाह मंगलवार, 13 फरवरी 2024</p>
    <p className="mangalik-text">प्रातः विदाई बुधवार, 14 फरवरी 2024</p>
   
  </div>
);

const AnimatedText = () => (
  <p className="mantra-text">
    <span>||</span> <span>श्री वक्रतुण्ड महाकाय सूर्य कोटी समप्रभा निर्विघ्नं कुरु मे देव सर्व-कार्येशु सर्वदा॥</span>
  </p>
);

const InvitationCard = () => {
  return (
    <div className="invitation-card">
      <video autoPlay loop muted id="background-video-1">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Ganesha />
      <br/> <br/>
      <br/>
      <br/>

      <div className="mantra-container">
        <AnimatedText />
      </div>
      <div className="invitation-header">
        <h1 className="animated-text">शादी का निमंत्रण</h1>
        <MangalikKaryakram />
        <p className="attend-text animated-text">शादी के लोकेशन पर आने के लिए यहाँ क्लिक करें। <a href="https://g.co/kgs/LdftgZN" target="_blank" rel="noopener noreferrer">Click Here</a></p>
       
      </div>
    </div>
  );
};

export default InvitationCard;
