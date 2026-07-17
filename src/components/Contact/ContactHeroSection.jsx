import { Link } from "react-router-dom";

function ContactHeroSection() {
  return (
    <section className="relative h-125 overflow-hidden">

     {/* Background */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(90deg, #0f172a 0%, #1e3a5f 40%, #4f6f97 70%, #d7dde7 100%)",
  }}
></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-900/60 to-slate-900/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

          <div className="max-w-2xl">

            <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
              Contact Our
              <br />
              <span className="text-status-green">
                Support Team
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200">
              Need assistance with the Smart Sanitization Monitoring System?
              Reach out to the appropriate department for sanitation services,
              technical support, or project-related queries.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
              >
                View Dashboard

                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              <a
                href="#support"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Support

                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>

              </a>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default ContactHeroSection;