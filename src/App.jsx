import React from 'react'
import { Award, BookOpen, Code2, GraduationCap, Layers3, Sparkles } from 'lucide-react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import SectionTitle from './components/SectionTitle'
import { TimelineCard } from './components/Timeline'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { activities, education, experience, profile, projects, skills } from './data/resumeData'

const skillBuckets = [
  { label: 'Technical skills', items: skills.technical, icon: Code2 },
  { label: 'Programming languages', items: skills.languages, icon: Layers3 },
  { label: 'Certifications', items: skills.certifications, icon: Award },
]

function SkillGroup({ label, items, icon: Icon }) {
  return (
    <div className="skill-group">
      <div className="skill-group-head">
        <Icon size={18} />
        <h3>{label}</h3>
      </div>
      <div className="chip-row">
        {items.map((item) => (
          <span className="chip" key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <NavBar name={profile.name} />
      <main>
        <Hero profile={profile} stats={[
          { label: 'USC GPA', value: '3.63 / 4.00' },
          { label: 'VIT CGPA', value: '8.92 / 10' },
          { label: 'Internships', value: '3' },
          { label: 'Projects', value: '4' },
        ]} />

        <section className="container section" id="about">
          <SectionTitle
            eyebrow="About"
            title="Turning data, optimization, and AI into practical systems"
            description="This portfolio showcases my work in machine learning, computer vision, analytics, and optimization engineering. From logistics automation at Maersk to research projects in deep learning and sentiment analysis, each section highlights projects built to solve real-world problems."
          />

          <div className="about-grid">
            <div className="card about-card">
              <div className="card-icon"><BookOpen size={18} /></div>
              <h3>What I focus on</h3>
              <p>
                My work combines machine learning, automation, and analytics to improve operational efficiency and decision-making. I’m especially interested in computer vision, intelligent optimization systems, and scalable data workflows.
              </p>
            </div>
            <div className="card about-card">
              <div className="card-icon"><Sparkles size={18} /></div>
              <h3>What you’ll find here</h3>
              <p>
                This portfolio includes industry experience, research projects, technical skills, and academic work presented in a clean, product-style format. Each section is designed to quickly communicate impact, technical depth, and problem-solving ability.
              </p>
            </div>
          </div>

          <div className="skill-grid">
            {skillBuckets.map((bucket) => (
              <SkillGroup key={bucket.label} {...bucket} />
            ))}
          </div>
        </section>

        <section className="container section" id="experience">
          <SectionTitle
            eyebrow="Experience"
            title="Internship experience"
            description="Industry experience across logistics, analytics, and data engineering through internships at Maersk and Angel One. Worked on automation systems, optimization algorithms, large-scale data workflows, and pipeline reliability for business-critical operations."
          />
          <div className="timeline-list">
            {experience.map((item) => (
              <TimelineCard
                key={`${item.company}-${item.role}`}
                title={`${item.role} · ${item.company}`}
                subtitle={item.location}
                period={item.period}
                bullets={item.highlights}
              />
            ))}
          </div>
        </section>

        <section className="container section" id="projects">
          <SectionTitle
            eyebrow="Projects"
            title="Research and applied AI work"
            description="A collection of research-driven and applied machine learning projects spanning computer vision, NLP, sentiment analysis, deep learning, and intelligent automation. Each project emphasizes technical depth, experimentation, and measurable impact."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="container section" id="education">
          <SectionTitle eyebrow="Education" title="Academic background" description="Academic background in computer science and applied data science with a strong foundation in machine learning, analytics, algorithms, and software systems from USC and VIT."/>
          <div className="education-grid">
            {education.map((item) => (
              <div key={item.school} className="card education-card">
                <div className="card-icon"><GraduationCap size={18} /></div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <span>{item.period} · {item.details}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="container section" id="activities">
          <SectionTitle eyebrow="Activities" title="Leadership and community involvement" />
          <div className="activities-grid">
            {activities.map((item) => (
              <div className="card activity-card" key={item}>
                <div className="card-icon"><Sparkles size={18} /></div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section" id="contact">
          <div className="contact-card">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Open to Opportunities"
                description="Interested in machine learning engineering, data science, AI research, and software-focused opportunities. Open to collaborations, internships, research discussions, and impactful technical projects."
              />
            </div>
            <div className="contact-details">
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>LinkedIn:</strong> {profile.linkedin}</p>
              <p><strong>GitHub:</strong> {profile.github}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer name={profile.name} />
    </div>
  )
}
