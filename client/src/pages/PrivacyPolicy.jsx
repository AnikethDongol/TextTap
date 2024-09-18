import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container mt-5">
      <section className="privacy-header text-center mb-5">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-intro">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">1. Introduction</h2>
        <p>
          Welcome to TextTap. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">2. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and contact details when you use our platform. We also collect information about your usage of our services, including IP addresses and device information.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">3. How We Use Your Information</h2>
        <p>
          We use your personal information to provide, maintain, and improve our services. This includes using your information to communicate with you, personalize your experience, and ensure the security of our platform.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">4. How We Share Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform, as well as in compliance with legal requirements or to protect our rights.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">5. Your Choices and Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. You can also opt out of receiving promotional communications from us. To exercise these rights, please contact us using the information provided below.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">6. Security</h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically.
        </p>
      </section>

      <section className="privacy-section my-5">
        <h2 className="privacy-subtitle">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at: <br />
          Email: <a href="mailto:support@texttap.com" className="privacy-email">support@texttap.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;