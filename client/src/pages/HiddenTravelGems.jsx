import React from 'react';
import { Container, Image } from 'react-bootstrap';

const HiddenTravelGems = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Exploring Hidden Travel Gems: Off the Beaten Path</h1>
      <Image src="https://biooverview.com/wp-content/uploads/2023/04/Discovering-Hidden-Gems-Off-The-Beaten-Path-Travel-Destinations-1.jpg" fluid className="custom-image mb-4" alt="Hidden Travel Gems" />
      <p>Traveling is about discovering new places, but the most memorable experiences often come from exploring hidden gems. Here are some off-the-beaten-path destinations to consider:</p>
      <h3>1. Cappadocia, Turkey</h3>
      <p>Known for its unique rock formations and hot air balloon rides, Cappadocia offers a surreal landscape that feels like stepping into another world.</p>
      <Image src="https://i.pinimg.com/originals/21/39/fa/2139fa6f88f8c9cb589382ae22e2034f.jpg" fluid className="custom-image mb-4" alt="Cappadocia" />
      <h3>2. Chefchaouen, Morocco</h3>
      <p>This blue-painted city in the Rif Mountains is a tranquil escape from the hustle and bustle of Morocco's bigger cities.</p>
      <Image src="https://th.bing.com/th/id/R.8843dd27863cd550468809cb262a2a5e?rik=9KpiTtWVJbbR7g&pid=ImgRaw&r=0" fluid className="custom-image mb-4" alt="Chefchaouen" />
      <h3>3. Lofoten Islands, Norway</h3>
      <p>The dramatic scenery of the Lofoten Islands is perfect for nature lovers, with its towering peaks, white sandy beaches, and picturesque fishing villages.</p>
      <Image src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/05/Lofoten-Islands-landscape-Norway.jpg" fluid className="custom-image mb-4" alt="Lofoten Islands" />
      <p>These hidden gems offer a unique and unforgettable travel experience for those looking to explore something beyond the usual tourist spots.</p>
    </Container>
  );
};

export default HiddenTravelGems;
