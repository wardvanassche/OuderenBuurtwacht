import React from "react";
import "./App.css";

export default function App() {
    return (
        <div className="container">
            {/* Hero Section */}
            <header className="hero">
                <h1>Your Product Name</h1>
                <p className="tagline">A short and powerful tagline about your product.</p>
                <a href="#video" className="cta-button">Watch Demo</a>
            </header>

            {/* Problem + Solution */}
            <section className="section">
                <h2>The Problem</h2>
                <p>
                    Describe a real issue your target audience faces. Make it relatable and clear.
                </p>
                <h2>The Solution</h2>
                <p>
                    Explain how your product solves that problem better, faster, or more efficiently.
                </p>
            </section>

            {/* Features */}
            <section className="section features">
                <h2>Key Features</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>Fast Setup</h3>
                        <p>Get started in minutes with no hassle.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Clean UI</h3>
                        <p>Intuitive design that's easy to use and navigate.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Responsive</h3>
                        <p>Looks great on desktop, tablet, and mobile devices.</p>
                    </div>
                </div>
            </section>

            {/* Demo Video */}
            <section className="section video-section" id="video">
                <h2>Product Demo</h2>
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/your-video-id"
                        title="Product Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>Built by Your Name</p>
                <p>Contact: your@email.com</p>
            </footer>
        </div>
    );
}
