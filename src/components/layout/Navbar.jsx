import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/reports', label: 'Reports' },
  { to: '/contact', label: 'Contact' },
]

const mainNavLinkClass = ({ isActive }) =>
  [
    'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'font-semibold text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-status-green'
      : 'text-slate-600 hover:text-primary',
  ].join(' ')

function GovEmblem() {
  return (
    <svg
      className="h-6 w-6 shrink-0 text-amber-400"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 8l-6 3v4c0 4 2.5 7.5 6 9 3.5-1.5 6-5 6-9v-4l-6-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15" r="2" fill="currentColor" />
    </svg>
  )
}

function PortalLogo() {
  return (
    <svg
      className="h-10 w-10 shrink-0 text-primary"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="18" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 18v-3a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 24h6M17 27h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="30" cy="12" r="3" fill="#1e7d32" />
      <path d="M30 9.5v5M27.5 12h5" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Government information bar */}
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <GovEmblem />
            <span className="font-medium">
              Government of Maharashtra | Smart City Mission
            </span>
          </div>
          <p className="hidden text-white/90 md:block">
            स्वच्छ महाराष्ट्र, सुंदर महाराष्ट्र
          </p>
          <p className="flex items-center gap-1.5 text-white/90">
            <svg
              className="h-3.5 w-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Helpline:{' '}
            <span className="font-semibold text-white">1800-123-4567</span>
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className=" flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            onClick={closeMenu}
          >
            <div className="flex items-center gap-3">
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
    <svg
      className="h-7 w-7 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  </div>

  <div>
    <h1 className="text-lg font-bold uppercase tracking-wide text-primary">
      ALANDI MUNICIPAL COUNCIL
    </h1>

    <p className="text-xs font-medium text-slate-500">
      Smart Sanitation Monitoring Platform
    </p>
  </div>
</div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={mainNavLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors duration-200 hover:bg-slate-50"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              Staff Login
            </Link>
           
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
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
        </div>

        {isOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={mainNavLinkClass}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-4 py-2 text-center text-sm font-medium text-primary"
                onClick={closeMenu}
              >
                Staff Login
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={closeMenu}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
