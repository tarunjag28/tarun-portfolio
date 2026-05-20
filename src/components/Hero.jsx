import React from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer">
      <Icon size={16} />
      <span>{label}</span>
      <ArrowUpRight size={14} />
    </a>
  )
}

export default function Hero({ profile, stats }) {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <span className="pill">MACHINE LEARNING · COMPUTER VISION · OPTIMIZATION</span>
        <h1>{profile.summary}</h1>
        <p className="subtitle">
          USC Applied Data Science graduate with experience across logistics automation, computer vision, analytics, and deep learning systems.
        </p>

        <div className="hero-meta">
          <span><MapPin size={16} /> {profile.location}</span>
          <span><Mail size={16} /> {profile.email}</span>
        </div>

        <div className="social-row">
          <SocialLink href={`mailto:${profile.email}`} icon={Mail} label="Email" />
          <SocialLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
          <SocialLink href={profile.github} icon={Github} label="GitHub" />
        </div>
      </div>

      <aside className="hero-panel">
  <div className="panel-top">
    <div>
      <p className="panel-label">Portfolio Overview</p>
      <h2>{profile.name}</h2>
    </div>

    <div className="avatar">TJ</div>
  </div>

  <div className="stat-grid">
    <div className="stat-card">
      <span>Specialization</span>
      <strong>Machine Learning & Optimization</strong>
    </div>

    <div className="stat-card">
      <span>Core Areas</span>
      <strong>Computer Vision · AI Systems</strong>
    </div>

    <div className="stat-card">
      <span>Industry Experience</span>
      <strong>Maersk · Angel One</strong>
    </div>

    <div className="stat-card">
      <span>Research & Projects</span>
      <strong>Deep Learning · NLP · Automation</strong>
    </div>
  </div>
</aside>
    </section>
  )
}
