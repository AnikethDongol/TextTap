import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <section className="text-center mb-5">
        <h1>About Us</h1>
        <p className="lead">
          Welcome to TextTap, where ideas come to life through the power of words.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500" className="img-fluid" alt="Our Mission" />
          </div>
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>
              At TextTap, our mission is to create a space where bloggers and readers alike can connect,
              inspire, and share their passion for writing. Whether you're into technology, lifestyle,
              or travel, you'll find content that speaks to you.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="my-5 text-center">
        <h2>Watch Our Journey</h2>
        <video width="700" controls className="mt-3">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Team Section */}
      <section className="my-5">
        <h2 className="text-center">Meet the Team</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/200" className="rounded-circle mb-3" alt="Team Member 1" />
            <h5>John Doe</h5>
            <p>Founder & CEO</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/200" className="rounded-circle mb-3" alt="Team Member 2" />
            <h5>Jane Smith</h5>
            <p>Chief Content Officer</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/200" className="rounded-circle mb-3" alt="Team Member 3" />
            <h5>Emily Johnson</h5>
            <p>Marketing Lead</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center my-5">
        <p>© 2024 TextTap - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
