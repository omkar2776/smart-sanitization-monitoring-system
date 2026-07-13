import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/reports', label: 'Reports' },
]

function CompactFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-primary text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Project
            </h2>
            <p className="mt-2 text-sm font-medium text-white">
              Smart Sanitization Monitoring System
            </p>
            <p className="mt-1 text-xs text-slate-400">
              MIT Academy of Engineering, Alandi
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Guide
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Faculty Guide — Department of Engineering
            </p>
            <h2 className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
              Team Members
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Project Team Member 1 · Member 2 · Member 3 · Member 4
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h2>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Contact
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              <Link
                to="/contact"
                className="transition-colors duration-200 hover:text-accent-light"
              >
                Contact the Project Team
              </Link>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Helpline: 1800-123-4567
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-primary-light/30 pt-4 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Smart Sanitization Monitoring System — MIT
            Academy of Engineering, Alandi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default CompactFooter
