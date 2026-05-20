import React from 'react'

export default function ProjectCard({ title, tag, description, category }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-category">{category}</span>
        <span className="project-tag">{tag}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
