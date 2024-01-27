import React from 'react';
import GoogleMapReact from 'google-map-react';
import './InvitationCard.css';
import chakra from './chakra.png';
import g_text from './g_text.PNG';
import ganeshaImage from './ganesh-37.png';
import ReactPlayer from 'react-player';

const LocationPin = () => (
  <div className="location-pin">
    <i className="fas fa-map-marker-alt"></i>
  </div>
);

const DecorationHeart = () => (
  <div className="decoration-heart">&#10084;</div>
);

const DecorationFlower = () => (
  <div className="decoration-flower">&#127802;</div>
);

const GaneshaImage = () => (
  <div className="ganesha-image-container">
    <div className="sun-circle">
      <div className="chakra"></div>
      <img src={chakra} alt="Lord Ganesha" className="ganesha-image" />
    </div>
  </div>
);

const Ganesha = () => (
  <div className="ganesha-container">
    <img src={ganeshaImage} alt="Lord Ganesha" className="ganesha-image" />
  </div>
);

const GaneshaText = () => (
  <div className="ganesha-text-container">
    <img src={g_text} alt="Lord Ganesha Text" className="ganesha-text" />
  </div>
);

const MangalikKaryakram = () => (
  <div className="mangalik-karyakram">
    <p className="mangalik-text">मांगलिक कार्यक्रम</p>
    <p className="mangalik-text">शुभ विवाह मंगलवार, 13 फरवरी 2024</p>
    <p className="mangalik-text">प्रातः विदाई बुधवार, 14 फरवरी 2024</p>
   
    <p className="mangalik-text">शुभांशी सिंह, (सॉफ्टवेयर इंजीनियर)</p>
    <p className="mangalik-text">परिणय</p>
    <p className="mangalik-text">कुलदीप सिंह,( सॉफ्टवेयर इंजीनियर)</p>
  </div>
);

const InvitationCard = () => {
  const mapApiKey = 'AIzaSyAsktpqPtGt7W3IMRUDaep13QjdP-IiytE';

  const mapProps = {
    center: { lat: 25.709541, lng: 82.6862606 },
    zoom: 15,
  };

  const markerProps = {
    lat: 25.709541,
    lng: 82.6862606,
  };

  return (
    <div className="invitation-card">
      {/* <ReactPlayer
        url="https://youtu.be/j5-dKf4yINM"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      /> */}



      <GaneshaImage />
      {/* <br/> <br/> <br/> */}
      {/* <GaneshaText /> */}
      {/* <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/> */}
      <Ganesha />
      
      <div className="mantra-container">
        <p className="mantra-text">|| श्री वक्रतुण्ड महाकाय सूर्य कोटी समप्रभा निर्विघ्नं कुरु मे देव सर्व-कार्येशु सर्वदा॥</p>
      </div>
      <div className="invitation-header">
        <h1 className="animated-text">शादी का निमंत्रण</h1>
      </div>
      <div className="invitation-content">
        <MangalikKaryakram />
        <p className="invitation-text">
          स्थान: <a href="https://www.google.com/maps/place/Tilak+mahal+newada/@25.709541,82.6862606,15z" target="_blank" rel="noopener noreferrer">तिलक महल, नेवाड़ा</a>
        </p>
        <div className="decoration-container">
          <DecorationHeart />
          <DecorationFlower />
        </div>
        <p className="attend-text animated-text">शादी के लोकेशन पर आने के लिए यहाँ क्लिक करें। <a href="https://www.google.com/maps/place//@25.7036218,82.6953118,13.29z?entry=ttu" target="_blank" rel="noopener noreferrer">Click Here</a></p>
      </div>
    </div>
  );
};

export default InvitationCard;
