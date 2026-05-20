import React from 'react'

export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {name}. Built with React and Vite.</p>
      </div>
    </footer>
  )
}
