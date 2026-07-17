import { Link } from "react-router-dom";

function AboutHeroSection() {
  return (
  <section className="relative overflow-hidden bg-white lg:h-155 lg:min-h-155">
      {/* Desktop Image */}
      <div className="absolute inset-y-0 right-0 hidden w-[65%] lg:block">
        <img
          src="/about-bg-dark.png"
          alt="Smart Sanitization Monitoring System"
          className="h-full w-full object-cover object-[58%_center]"
          loading="eager"
        />

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[55%]"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.96) 12%, rgba(255,255,255,0.78) 28%, rgba(255,255,255,0.48) 48%, rgba(255,255,255,0.18) 68%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile */}
      <div className="relative lg:hidden">
        <img
          src="/about-bg-dark.png"
          alt="Smart Sanitization Monitoring System"
          className="h-56 w-full object-cover object-center sm:h-72"
          loading="eager"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-white via-white/50 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Left Content */}
     <div className="relative z-10 flex w-full items-center px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="w-full max-w-xl lg:max-w-[38%] lg:shrink-0">

          <h1 className="text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
            <span className="text-primary">
              Building Smarter
            </span>
            <br />
            <span className="text-status-green">
              Public Sanitation
            </span>
          </h1>

         <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
  Discover how our IoT-based Smart Sanitization Monitoring System helps municipal authorities monitor public sanitation facilities in real time using LoRa communication, cloud technology, and intelligent analytics for efficient city management.
</p>

         <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">

            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
            >
              View Dashboard

              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>

            </Link>

          <button
  onClick={() => {
    const section = document.getElementById("objectives");

    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        120;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }}
  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-colors duration-200 hover:border-primary/50 hover:bg-slate-50"
>
  Project Objectives

  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
</button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;