import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

const Home = () => {
  return (
    <>
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
                  <Link to="/blog/tech-trends" className="btn btn-outline-primary">Read More</Link>
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
                  <Link to="/blog/minimalist-living" className="btn btn-outline-primary">Read More</Link>
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
                  <Link to="/blog/travel-gems" className="btn btn-outline-primary">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="./src/assets/image4.jpg" className="img-fluid blogger-img" alt="About the Blogger" />
            </div>
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                Welcome to TextTap, your go-to platform for sharing insightful, thought-provoking blogs on
                various topics like technology, lifestyle, travel, and more. Our mission is to provide a space
                where writers and readers can connect and engage with meaningful content.
              </p>
              <p>
                Whether you're a tech enthusiast or a travel lover, you'll find something to inspire you here at TextTap.
                Join our community and start sharing your stories with the world!
              </p>
              <Link to="/about" className="btn btn-outline-dark">Learn More</Link>
            </div>
          </div>
        </section>

        {/* Social Media and Shop Section */}
        <section className="my-5">
          <h2 className="text-center mb-4">Follow Us Elsewhere</h2>
          <div className="d-flex justify-content-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <img src="./src/assets/instagram.jpg" className="social-media-img" alt="Instagram" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <img src="./src/assets/pinterest.jpg" className="social-media-img" alt="Pinterest" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <img src="./src/assets/twitter.jpg" className="social-media-img" alt="Twitter" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
