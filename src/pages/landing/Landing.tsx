import React, { useState } from 'react';
import LandingPage from '../../components/LandingPage/LandingPage';
import { landingData } from './landingData';

export function Landing() {
  const [selectedLanding, setSelectedLanding] = useState({
    first: true,
    second: false,
    third: false,
  });

  const { landing1, landing2, landing3 } = landingData;

  return (
    <div>
      {selectedLanding.first ? (
        <LandingPage
          imageSrc={landing1.img.src}
          imageAlt={landing1.img.alt}
          title={landing1.title}
          text={landing1.text}
          selectedLanding={selectedLanding}
          setSelectedLanding={setSelectedLanding}
        />
      ) : null}
      {selectedLanding.second ? (
        <LandingPage
          imageSrc={landing2.img.src}
          imageAlt={landing2.img.alt}
          title={landing2.title}
          text={landing2.text}
          selectedLanding={selectedLanding}
          setSelectedLanding={setSelectedLanding}
        />
      ) : null}
      {selectedLanding.third ? (
        <LandingPage
          imageSrc={landing3.img.src}
          imageAlt={landing3.img.alt}
          title={landing3.title}
          text={landing3.text}
          selectedLanding={selectedLanding}
          setSelectedLanding={setSelectedLanding}
        />
      ) : null}
    </div>
  );
}

export default Landing;
