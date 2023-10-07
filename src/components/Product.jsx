import React from 'react';

const Product = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Unlock the Future: Seamless Blockchain Certificate Generation and Verification</h1>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Secure Certificate Generation</li>
          <li>Decentralized Storage</li>
          <li>Transparent Verification</li>
          <li>User-Friendly Interface</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          The platform uses blockchain technology to securely generate, store, and verify certificates. Follow these steps:
        </p>
        <ol>
          <li>Create a certificate by providing necessary details.</li>
          <li>The certificate is securely stored on the blockchain.</li>
          <li>Anyone can verify the certificate's authenticity through the blockchain.</li>
        </ol>
      </section>

      <section className="get-started">
        <h2>Get Started</h2>
        <p>
          Join us today to experience the future of secure certification. Sign up now!
        </p>
        <button>Sign Up</button>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>"This platform has simplified our certificate validation process, saving us time and ensuring credibility." - John Doe, XYZ Organization</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          For inquiries or assistance, feel free to contact us via email at info@example.com or by phone at +123-456-7890.
        </p>
      </section>
    </div>
  );
};

export default Product;

