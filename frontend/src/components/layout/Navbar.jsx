import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/reports', label: 'Reports' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-white/10 text-accent-light'
      : 'text-slate-200 hover:bg-white/5 hover:text-white',
  ].join(' ')

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary-light/30 bg-primary shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3"
          onClick={closeMenu}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Smart City Portal
          </span>
          <span className="hidden h-4 w-px bg-slate-600 sm:block" />
          <span className="text-sm font-medium text-white sm:text-base">
            LoRa Sanitization Monitoring
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="rounded-lg border border-accent/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent/10"
          >
            Staff Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 hover:text-white lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-primary-light/30 bg-primary-dark px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-primary-light/30 pt-4">
            <Link
              to="/login"
              className="rounded-lg border border-accent/40 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent/10"
              onClick={closeMenu}
            >
              Staff Login
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
              onClick={closeMenu}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
