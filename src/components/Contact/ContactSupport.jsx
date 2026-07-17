function ContactSupport() {
  return (
    <section
      id="support"
      className="bg-white py-20 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-primary">
            Official Contact Directory
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            For sanitation services, technical support, or project-related
            assistance, please contact the appropriate department below.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Inspector */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="flex items-center gap-5">

              <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-green-100">

                <svg
                  className="h-9 w-9 text-status-green"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                  />
                </svg>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-primary">
                  Corporation Inspector
                </h3>

                <p className="mt-1 font-semibold text-status-green">
                  Anand Gaikwad
                </p>

              </div>

            </div>

            <p className="mt-7 leading-8 text-slate-600">
              Contact for sanitation-related complaints, public toilet
              maintenance, hygiene issues, facility management,
              and municipal sanitation services.
            </p>

          <div className="mt-8 space-y-4">

  <div className="flex items-center justify-between">

    <span className="font-semibold text-slate-700">
      Phone
    </span>

    <a
      href="tel:+919767534545"
      className="font-semibold text-primary hover:underline"
    >
      +91 97675 34545
    </a>

  </div>

  <div className="flex items-center justify-between">

    <span className="font-semibold text-slate-700">
      Department
    </span>

    <span className="text-slate-600">
      Municipal Sanitation
    </span>

  </div>

</div>

<a
  href="https://wa.me/919767534545"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
>
  Call Inspector

  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
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

          {/* Technical */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="flex items-center gap-5">

              <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-blue-100">

                <svg
                  className="h-9 w-9 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16v16H4z"
                  />
                </svg>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-primary">
                  System Developer
                </h3>

                <p className="mt-1 font-semibold text-blue-600">
                  Omkar Jagadale
                </p>

              </div>

            </div>

            <p className="mt-7 leading-8 text-slate-600">
              Contact for website support, dashboard assistance,
              technical issues, feature requests,
              and Smart Sanitization Monitoring System queries.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between">

                <span className="font-semibold text-slate-700">
                  Phone
                </span>

                <a
                  href="tel:+918530886793"
                  className="font-semibold text-primary hover:underline"
                >
                  +91 85308 86793
                </a>

              </div>

              <div className="flex items-center justify-between">

                <span className="font-semibold text-slate-700">
                  Department
                </span>

                <span className="text-slate-600">
                  Technical Support
                </span>

              </div>

            </div>

            <a
             href="https://wa.me/918530886793"
             target="_blank"
             rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
            >
              Contact Support

              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
    </section>
  );
}

export default ContactSupport;