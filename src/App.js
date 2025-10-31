import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="app">
      <nav className="site-nav">
        <div className="site-brand">
          <img src="/logo222.png" alt="R Factor logo" className="logo" />
          R Factor
        </div>

        <div className="nav-links">
          <a href="#csservices">Services</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-left">
          <h1 className="h-title">Strategy-led customer success</h1>
          <p className="h-sub">
            Driving Retention , Revenue and Results. One SaaS at a time.
          </p>
          <div className="h-ctas">
            <button className="btn btn-primary">Get Started</button>
            <a className="btn btn-ghost" href="#csservices">
              See services
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="device-mock">Live preview</div>
        </div>
      </header>

      <div id="csservices" className="anchor-pad"></div>

      <section className="services">
        <div className="services-header">
          <h2>Our services</h2>
          <div className="services-sub">Help SaaS teams grow, scale & lead</div>
        </div>

          <div className="services-grid">
          <article className="service-card">
            <div className="service-top">
              <div className="service-icon">1:1</div>
              <div>
                <div className="service-title">1-1 Coaching</div>
                <div className="card-meta">Learn Plan · Assess · Assist</div>
              </div>
            </div>
            <p className="service-desc">Personalized coaching for CS individuals and leaders</p>
          </article>

          <article className="service-card">
            <div className="service-top">
              <div className="service-icon">B2B</div>
              <div>
                <div className="service-title">B2B SaaS Consulting</div>
                <div className="card-meta">B2B · Consulting</div>
              </div>
            </div>
            <p className="service-desc">Custom CS Strategies for Startups and Scaleups</p>
          </article>

          <article className="service-card">
            <div className="service-top">
              <div className="service-icon">FL</div>
              <div>
                <div className="service-title">Fractional Leadership</div>
                <div className="card-meta">Leadership · Growth</div>
              </div>
            </div>
            <p className="service-desc">Step in as interim VP/Director of CS  to build your foundations</p>
          </article>
        </div>
      </section>

      <div className="spacer" />
    </div>
  );
}

export default App;