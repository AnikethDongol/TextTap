import React from 'react';
import '../index.css'; // Import the CSS file where we'll handle image sizing

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1 className="display-4">Welcome to TextTap!</h1>
        <p className="lead">
          Share your thoughts and connect with the world through engaging text-based blogs.
        </p>
        <a href="#blog-section" className="btn btn-primary btn-lg mt-3">
          Explore Blogs
        </a>
      </section>

      {/* Blog Section */}
      <section id="blog-section" className="my-5">
        <h2 className="text-center mb-4">Featured Blogs</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="./src/assets/image1.jpg" className="card-img-top blog-img" alt="Blog 1" />
              <div className="card-body">
                <h5 className="card-title">Tech Trends in 2024</h5>
                <p className="card-text">
                  Stay ahead of the curve with insights into the latest technology trends.
                </p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="./src/assets/image2.jpg" className="card-img-top blog-img" alt="Blog 2" />
              <div className="card-body">
                <h5 className="card-title">A Guide to Minimalist Living</h5>
                <p className="card-text">
                  Simplify your life with practical tips on adopting a minimalist lifestyle.
                </p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="./src/assets/image3.jpg" className="card-img-top blog-img" alt="Blog 3" />
              <div className="card-body">
                <h5 className="card-title">Exploring Hidden Travel Gems</h5>
                <p className="card-text">
                  Discover breathtaking, lesser-known travel destinations around the globe.
                </p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Blogger Section */}
      <section className="my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500" className="img-fluid blogger-img" alt="About the Blogger" />
          </div>
          <div className="col-md-6">
            <h2>About the Blogger</h2>
            <p>
              Hi! I'm Mikayla, a passionate writer and storyteller. I love sharing my thoughts
              on technology, lifestyle, and travel. Follow me on my blogging journey!
            </p>
            <a href="/about" className="btn btn-outline-dark">Learn More</a>
          </div>
        </div>
      </section>

      {/* Social Media and Shop Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Follow Me Elsewhere</h2>
        <div className="d-flex justify-content-center">
          <a href="#" className="mx-3"><img src="https://via.placeholder.com/100" className="social-media-img" alt="Instagram" /></a>
          <a href="#" className="mx-3"><img src="https://via.placeholder.com/100" className="social-media-img" alt="Pinterest" /></a>
          <a href="#" className="mx-3"><img src="https://via.placeholder.com/100" className="social-media-img" alt="Twitter" /></a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center my-5">
        <p>© 2024 TextTap - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
