import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <section className="text-center mb-5 about-us-section">
        <h1 className="about-us-title">About Us</h1>
        <p className="lead about-us-description">
          Welcome to TextTap, where ideas come to life through the power of words. Our platform is dedicated to
          bringing together passionate writers and engaged readers, creating a vibrant community where everyone can
          share their stories, insights, and knowledge.
        </p>
        <p className="about-us-details">
          At TextTap, we believe in the transformative power of written expression. Whether you’re a tech enthusiast,
          a lifestyle guru, or an avid traveler, you’ll find a space here to explore, learn, and contribute.
          <br /><br />
          Our mission is to foster a supportive environment that encourages creativity and dialogue. By connecting
          writers with readers who share their interests, we aim to make a positive impact on our community and beyond.
          <br /><br />
          Join us on this journey and become a part of our growing family. Together, we can make every story count!
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="./src/assets/mission.jpeg" className="img-fluid fixed-size-img" alt="Our Mission" />
          </div>
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>
              At TextTap, our mission is to create a space where bloggers and readers alike can connect,
              inspire, and share their passion for writing. Whether you're into technology, lifestyle,
              or travel, you'll find content that speaks to you. We strive to foster a community where
              diverse voices can be heard and meaningful conversations can take place.
            </p>
            <p>
              Join us as we explore new ideas, share stories, and build a platform that celebrates the art
              of writing. Your thoughts and creativity are what make TextTap a vibrant and dynamic space.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="my-5 text-center">
        <h2>Watch Our Journey</h2>
        <video className="video-player mt-3" autoPlay muted loop>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Our Community Impact Section */}
      <section className="my-5 text-center">
        <h2>Our Community Impact</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="impact-card">
              <i className="fas fa-users impact-icon"></i>
              <h4>Engaged Readers</h4>
              <p>We foster a community where readers actively participate and engage with content that matters to them.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="impact-card">
              <i className="fas fa-pencil-alt impact-icon"></i>
              <h4>Empowered Writers</h4>
              <p>Our platform empowers writers by giving them the tools and audience to share their stories and ideas.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="impact-card">
              <i className="fas fa-share-alt impact-icon"></i>
              <h4>Global Reach</h4>
              <p>TextTap connects voices from around the world, creating a diverse and inclusive space for discussion and discovery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
