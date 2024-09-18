import React from 'react';
import { Container, Image } from 'react-bootstrap';

const TechTrends2024 = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Tech Trends in 2024: What's Shaping the Future?</h1>
      <Image src="https://wiipa.org/wp-content/uploads/2023/03/photo_2023-03-25_23-12-23.jpg" fluid className="mb-4" alt="Tech Trends 2024" />
      <p>As we step into 2024, technology continues to evolve at a rapid pace. From AI and machine learning to the rise of quantum computing, the digital landscape is constantly shifting. Here are some key trends to look out for this year:</p>
      <ul>
        <li><b>Artificial Intelligence & Machine Learning:</b> AI is no longer a future concept. In 2024, we see AI shaping industries like healthcare, finance, and even creative arts.</li>
        <li><b>Quantum Computing:</b> The development of quantum computing is poised to revolutionize how we solve complex problems.</li>
        <li><b>5G & Beyond:</b> The widespread adoption of 5G networks is bringing faster internet speeds and enabling smarter cities.</li>
        <li><b>Metaverse & Virtual Worlds:</b> The metaverse is expanding, with virtual environments becoming part of everyday life.</li>
      </ul>
      <p>2024 promises to be a pivotal year for technology as we continue to explore the potential of AI, quantum computing, and virtual worlds.</p>
    </Container>
  );
};

export default TechTrends2024;
