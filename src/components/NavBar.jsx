import React from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export default function NavBar({ name }) {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#home">
          <span className="brand-mark">TJ</span>

          <span>
            <strong>{name}</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            Resume
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mobile-nav container">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="resume-button"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      ) : null}
    </header>
  )
}