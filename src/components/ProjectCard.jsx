import React from 'react'

export default function ProjectCard({ title, tag, description, category, href }) {
  const CardContent = (
    <>
      <div className="project-top">
        <span className="project-category">{category}</span>
        <span className="project-tag">{tag}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {href ? <span className="project-link">View paper →</span> : null}
    </>
  )

  if (href) {
    return (
      <a
        className="project-card-link"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <article className="project-card">{CardContent}</article>
      </a>
    )
  }

  return <article className="project-card">{CardContent}</article>
}