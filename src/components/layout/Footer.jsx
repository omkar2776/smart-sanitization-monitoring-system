import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/reports', label: 'Reports' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-primary text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Project
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Smart Sanitization Monitoring System Using LoRa
            </p>
            <p className="mt-2 text-xs text-slate-400">
              IoT-based municipal sanitation monitoring for public washrooms and
              sanitation areas.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h2>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Department
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              MIT Academy of Engineering
            </p>
            <p className="mt-4 text-sm font-medium text-slate-200">Guide</p>
            <p className="mt-1 text-sm text-slate-400">Faculty Guide — Department of Engineering</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Team Members
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Project Team Member 1</li>
              <li>Project Team Member 2</li>
              <li>Project Team Member 3</li>
              <li>Project Team Member 4</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-light/30 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Smart Sanitization Monitoring System. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-status-green" />
              Operational
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-status-yellow" />
              Maintenance
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-status-red" />
              Alert
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
