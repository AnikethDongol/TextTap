import React from 'react';
import { Container, Image } from 'react-bootstrap';

const MinimalistLiving = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">A Guide to Minimalist Living: Declutter Your Life</h1>
      <Image src="https://static.wixstatic.com/media/nsplsh_289630eb69ca41cc846abfbd066358f3~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg" fluid className="mb-4" alt="Minimalist Living" />
      <p>Minimalist living is more than just a design choice; it's a lifestyle that emphasizes simplicity and intentionality. Here's how you can embrace minimalism in your life:</p>
      <h3>1. Declutter Your Space</h3>
      <p>Start by removing items you no longer use. Minimalism is about keeping only the essentials and letting go of excess possessions.</p>
      <h3>2. Focus on Quality Over Quantity</h3>
      <p>Invest in high-quality items that last longer rather than buying in excess. A well-made product often outlasts several cheaper versions.</p>
      <h3>3. Simplify Your Digital Life</h3>
      <p>Unsubscribe from unnecessary emails, declutter your phone, and organize your digital files for a more streamlined online experience.</p>
      <h3>4. Practice Mindful Consumption</h3>
      <p>Minimalism isn't about having less; it's about consuming mindfully. Only buy what adds value to your life.</p>
    </Container>
  );
};

export default MinimalistLiving;
