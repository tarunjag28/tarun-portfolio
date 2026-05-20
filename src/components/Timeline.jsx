import React from 'react'

export function TimelineCard({ title, subtitle, period, bullets }) {
  return (
    <article className="timeline-card">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="timeline-head">
          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <span>{period}</span>
        </div>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
