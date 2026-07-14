import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white lg:h-[620px] lg:min-h-[620px]">
      {/* Desktop — cinematic full-bleed image (~65% width, flush to right edge) */}
      <div className="absolute inset-y-0 right-0 hidden w-[65%] lg:block">
        <img
          src="/hero-sanitation copy.png"
          alt="Modern smart city public sanitation facility with LoRa IoT infrastructure, municipal landscaping, and clean urban surroundings"
          className="h-full w-full object-cover object-[58%_center]"
          loading="eager"
        />
        {/* Smooth white-to-transparent blend between text area and image */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[55%]"
          style={{
            background:
              'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.96) 12%, rgba(255,255,255,0.78) 28%, rgba(255,255,255,0.48) 48%, rgba(255,255,255,0.18) 68%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile / tablet — stacked image */}
      <div className="relative lg:hidden">
        <img
          src="/hero-sanitation.png"
          alt="Modern smart city public sanitation facility with LoRa IoT infrastructure, municipal landscaping, and clean urban surroundings"
          className="h-56 w-full object-cover object-center sm:h-72"
          loading="eager"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Left content column */}
      <div className="relative z-10 flex h-full max-w-7xl items-start px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[620px] lg:px-8 lg:py-0">
        <div className="w-full max-w-xl lg:max-w-[38%] lg:shrink-0">
         

          <h1 className="text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
            <span className="text-primary">Smart Sanitization</span>
            <br />
            <span className="text-status-green">Monitoring System</span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            A Smart Municipal IoT Platform for Real-Time Public Sanitation Monitoring.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[0.9375rem]">
            Monitor public sanitation facilities in real time using IoT sensors, LoRa
            communication, and a centralized monitoring platform to improve hygiene,
            resource management, and operational efficiency.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
            >
              Explore Dashboard
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-colors duration-200 hover:border-primary/50 hover:bg-slate-50"
            >
              Learn More
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection