import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
  <h5>What I Offer</h5>
  <h2>Services</h2>

  <div className="container services__container">
    {/* Full Stack Development */}
    <article className="service">
      <div className="service__head">
        <h3>Full Stack Development</h3>
      </div>
      <ul className="service__list">
        <li><BiCheck className="service__list-icon" /><p>End-to-end SaaS product development</p></li>
        <li><BiCheck className="service__list-icon" /><p>Microservice-based web applications</p></li>
        <li><BiCheck className="service__list-icon" /><p>Custom dashboard and admin panels</p></li>
        <li><BiCheck className="service__list-icon" /><p>Containerization with Docker</p></li>
        <li><BiCheck className="service__list-icon" /><p>CI/CD integration and automation</p></li>
        <li><BiCheck className="service__list-icon" /><p>Cloud deployment (AWS, Vercel)</p></li>
        <li><BiCheck className="service__list-icon" /><p>LLM & AI feature integration</p></li>
      </ul>
    </article>

    {/* Frontend Development */}
    <article className="service">
      <div className="service__head">
        <h3>Frontend Development</h3>
      </div>
      <ul className="service__list">
        <li><BiCheck className="service__list-icon" /><p>Modern UI with React.js & Next.js</p></li>
        <li><BiCheck className="service__list-icon" /><p>Responsive and mobile-first design</p></li>
        <li><BiCheck className="service__list-icon" /><p>State management (Redux Toolkit)</p></li>
        <li><BiCheck className="service__list-icon" /><p>API integration (REST & GraphQL)</p></li>
        <li><BiCheck className="service__list-icon" /><p>Performance & SEO optimization</p></li>
        <li><BiCheck className="service__list-icon" /><p>Authentication with Firebase & JWT</p></li>
        <li><BiCheck className="service__list-icon" /><p>Component testing using React Testing Library</p></li>

      </ul>
    </article>

    {/* Backend Development */}
    <article className="service">
      <div className="service__head">
        <h3>Backend Development</h3>
      </div>
      <ul className="service__list">
        <li><BiCheck className="service__list-icon" /><p>Scalable APIs with Node.js & Golang</p></li>
        <li><BiCheck className="service__list-icon" /><p>Database design (MongoDB, MySQL, PostgreSQL)</p></li>
        <li><BiCheck className="service__list-icon" /><p>Real-time apps with WebSockets</p></li>
        <li><BiCheck className="service__list-icon" /><p>Message Queues (Kafka, Redis Streams)</p></li>
        <li><BiCheck className="service__list-icon" /><p>Secure development & user auth</p></li>
        <li><BiCheck className="service__list-icon" /><p>Server optimization & load handling</p></li>
        <li><BiCheck className="service__list-icon" /><p>Kubernetes deployment & scaling</p></li>
      </ul>
    </article>
  </div>
</section>

  );
};

export default Services;
